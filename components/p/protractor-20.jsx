import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cugs406to.css';
import '../../css/z/zrzrd2cbc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cugs406to"/><path class="zrzrd2cbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:protractor-20"} {...others} />);
}

export default Component;
