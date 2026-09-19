import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/agq-2qutk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="agq-2qutk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:logo-red-hat-ai-instructlab-on-ibm-cloud"} {...others} />);
}

export default Component;
