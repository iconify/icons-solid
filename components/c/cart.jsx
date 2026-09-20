import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lcrpzobws.css';
import '../../css/w/w0wtlol5y.css';
import '../../css/p/p__48nb_q.css';
import '../../css/d/d9gep5hgf.css';
import '../../css/o/o6pm6sbng.css';
import '../../css/v/vy71c9b0i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="lcrpzobws"/><path class="w0wtlol5y"/><path class="p__48nb_q"/><path class="d9gep5hgf"/><path class="o6pm6sbng"/><path class="vy71c9b0i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:cart"} {...others} />);
}

export default Component;
