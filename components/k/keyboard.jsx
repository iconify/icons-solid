import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tc-b0jlzp.css';

const viewBox = {"width":432,"height":384};
const content = `<path class="tc-b0jlzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:keyboard"} {...others} />);
}

export default Component;
