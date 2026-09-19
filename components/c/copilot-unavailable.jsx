import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mo8q-3hhk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mo8q-3hhk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:copilot-unavailable"} {...others} />);
}

export default Component;
