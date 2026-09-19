import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mnxmi3-ee.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="mnxmi3-ee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:equal-circle"} {...others} />);
}

export default Component;
