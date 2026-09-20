import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wrzv76bsu.css';
import '../../css/o/o1izntgqb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wrzv76bsu"/><path class="o1izntgqb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:gymnet"} {...others} />);
}

export default Component;
