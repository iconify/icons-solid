import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eumvrmloj.css';
import '../../css/o/on432c78a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="eumvrmloj"/><path class="on432c78a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scrubber-48"} {...others} />);
}

export default Component;
