import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z_pzoebco.css';
import '../../css/z/z6-zjdbdj.css';
import '../../css/v/vttjq2bxj.css';
import '../../css/k/kttk4i3px.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z_pzoebco"/><path class="z6-zjdbdj"/><path class="vttjq2bxj"/><path class="kttk4i3px"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:blood-drops-positive"} {...others} />);
}

export default Component;
