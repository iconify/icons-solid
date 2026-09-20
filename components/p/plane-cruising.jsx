import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oapu8s0xw.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="oapu8s0xw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:plane-cruising"} {...others} />);
}

export default Component;
