import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h6uk8ob_t.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="h6uk8ob_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:eye-slash"} {...others} />);
}

export default Component;
