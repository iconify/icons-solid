import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vcjq7gb3l.css';
import '../../css/h/hgh3anbek.css';

const viewBox = {"width":63,"height":64};
const content = `<path class="vcjq7gb3l"/><path class="hgh3anbek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:information-us"} {...others} />);
}

export default Component;
