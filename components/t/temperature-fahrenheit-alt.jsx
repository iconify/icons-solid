import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ovmg3j_6y.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ovmg3j_6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:temperature-fahrenheit-alt"} {...others} />);
}

export default Component;
