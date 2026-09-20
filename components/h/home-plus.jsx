import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/txm3c8rvj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="txm3c8rvj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:home-plus"} {...others} />);
}

export default Component;
