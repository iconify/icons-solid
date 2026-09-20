import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/euzmmobsp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="euzmmobsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:calendar-check"} {...others} />);
}

export default Component;
