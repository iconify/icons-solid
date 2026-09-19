import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/weua4abnn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="weua4abnn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:arrow-down-right-md"} {...others} />);
}

export default Component;
