import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iz03p4bhy.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="iz03p4bhy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:hardclipcurve"} {...others} />);
}

export default Component;
