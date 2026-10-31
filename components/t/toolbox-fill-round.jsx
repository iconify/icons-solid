import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jc-xamhui.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jc-xamhui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:toolbox-fill-round"} {...others} />);
}

export default Component;
