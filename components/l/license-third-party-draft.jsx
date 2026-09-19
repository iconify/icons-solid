import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sy-hsnmqc.css';
import '../../css/f/f1ijkjbnr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="sy-hsnmqc"/><path class="f1ijkjbnr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:license-third-party-draft"} {...others} />);
}

export default Component;
