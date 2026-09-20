import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mibv8f8tc.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="mibv8f8tc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:crosswalk-markings-ladder"} {...others} />);
}

export default Component;
