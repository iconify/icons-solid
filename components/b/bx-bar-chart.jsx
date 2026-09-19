import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xhj1p2osp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xhj1p2osp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-bar-chart"} {...others} />);
}

export default Component;
