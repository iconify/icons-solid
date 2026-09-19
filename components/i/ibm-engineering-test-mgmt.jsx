import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vjlrjeixl.css';
import '../../css/m/m1mt6od4j.css';
import '../../css/p/p_qb8obhm.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vjlrjeixl"/><path class="m1mt6od4j"/><path class="p_qb8obhm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-engineering-test-mgmt"} {...others} />);
}

export default Component;
