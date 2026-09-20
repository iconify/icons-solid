import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n4jivj4_l.css';
import '../../css/j/jvrqx2k1r.css';
import '../../css/c/c9o4sve3j.css';
import '../../css/h/hybz2db_k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n4jivj4_l"/><path class="jvrqx2k1r"/><path class="c9o4sve3j"/><path class="hybz2db_k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:spotify-logo-2"} {...others} />);
}

export default Component;
