import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/srm-1uqad.css';
import '../../css/s/s6jqjmbla.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="srm-1uqad"/><path class="s6jqjmbla"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:scala"} {...others} />);
}

export default Component;
