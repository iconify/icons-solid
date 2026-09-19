import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fhx61zfib.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="fhx61zfib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:chevron-right-compact"} {...others} />);
}

export default Component;
