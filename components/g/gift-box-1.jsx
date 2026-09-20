import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/krxx9w6ae.css';
import '../../css/o/oy96-vbht.css';
import '../../css/x/x4k8psbcc.css';
import '../../css/u/u_x94ac-s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="krxx9w6ae"/><path class="oy96-vbht"/><path class="x4k8psbcc"/><path class="u_x94ac-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:gift-box-1"} {...others} />);
}

export default Component;
