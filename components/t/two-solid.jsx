import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nnbwfo_-i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nnbwfo_-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:two-solid"} {...others} />);
}

export default Component;
