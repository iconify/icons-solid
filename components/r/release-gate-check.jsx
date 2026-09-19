import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t37m8-r3t.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="t37m8-r3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:release-gate-check"} {...others} />);
}

export default Component;
