import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cu4jmcblb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cu4jmcblb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:briefcase-alt-filled"} {...others} />);
}

export default Component;
