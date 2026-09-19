import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmvotg30c.css';
import '../../css/f/f1ijkjbnr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mmvotg30c"/><path class="f1ijkjbnr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:license-draft"} {...others} />);
}

export default Component;
