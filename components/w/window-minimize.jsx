import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eemv9t5oh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="eemv9t5oh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:window-minimize"} {...others} />);
}

export default Component;
