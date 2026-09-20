import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dsx4-tbes.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dsx4-tbes"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:kql-operand"} {...others} />);
}

export default Component;
