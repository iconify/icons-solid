import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dj6eepmbw.css';
import '../../css/m/m-0zmcczs.css';
import '../../css/x/x9ach8b5k.css';

const viewBox = {"width":32,"height":32};
const content = `<rect class="dj6eepmbw"/><path class="m-0zmcczs"/><path class="x9ach8b5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:tennis"} {...others} />);
}

export default Component;
