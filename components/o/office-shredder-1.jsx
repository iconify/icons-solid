import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/b/blvqrmbuc.css';
import '../../css/s/s_u7kz7uj.css';
import '../../css/r/ruhx5ib9r.css';
import '../../css/l/la5s4p9kx.css';
import '../../css/o/o9l509dbn.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="blvqrmbuc"/><path class="s_u7kz7uj"/><path class="ruhx5ib9r"/><path class="la5s4p9kx"/><path class="o9l509dbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:office-shredder-1"} {...others} />);
}

export default Component;
