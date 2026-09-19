import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wax2jmrhx.css';
import '../../css/a/a44ck8zrd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wax2jmrhx"/><path class="a44ck8zrd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:mouse"} {...others} />);
}

export default Component;
