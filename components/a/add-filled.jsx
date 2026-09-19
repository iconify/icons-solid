import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ap5cqxbrg.css';
import '../../css/w/wzyv4j1bt.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ap5cqxbrg"/><path class="wzyv4j1bt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:add-filled"} {...others} />);
}

export default Component;
