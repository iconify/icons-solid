import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/exqz4rqlq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="exqz4rqlq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:letter-t-square-solid"} {...others} />);
}

export default Component;
