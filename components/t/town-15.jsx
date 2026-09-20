import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_o8_ue3o.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="e_o8_ue3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:town-15"} {...others} />);
}

export default Component;
