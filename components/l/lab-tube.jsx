import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ng0uelbxk.css';
import '../../css/y/yw36igb2b.css';
import '../../css/q/qel5tnvvk.css';
import '../../css/w/wnk9nabrt.css';
import '../../css/z/z_1y867bm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ng0uelbxk"/><path class="yw36igb2b"/><path class="qel5tnvvk"/><path class="wnk9nabrt"/><path class="z_1y867bm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:lab-tube"} {...others} />);
}

export default Component;
