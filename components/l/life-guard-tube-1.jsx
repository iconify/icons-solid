import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/coy96zbms.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="coy96zbms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:life-guard-tube-1"} {...others} />);
}

export default Component;
