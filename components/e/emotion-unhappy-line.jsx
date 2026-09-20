import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o8oblbcln.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o8oblbcln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:emotion-unhappy-line"} {...others} />);
}

export default Component;
