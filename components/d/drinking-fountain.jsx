import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/er8u5db2h.css';

const viewBox = {"width":63,"height":64};
const content = `<path class="er8u5db2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:drinking-fountain"} {...others} />);
}

export default Component;
