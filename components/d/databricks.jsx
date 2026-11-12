import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tc3v_0bsd.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="tc3v_0bsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:databricks"} {...others} />);
}

export default Component;
