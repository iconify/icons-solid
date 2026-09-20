import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mxwun1osp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mxwun1osp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:slash-diamond"} {...others} />);
}

export default Component;
