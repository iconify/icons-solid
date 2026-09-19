import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8vrhujpl.css';
import '../../css/p/pgrjimbvm.css';
import '../../css/h/hrtycpelz.css';
import '../../css/h/ho6a3e0mt.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="t8vrhujpl"/><path class="pgrjimbvm"/><path class="hrtycpelz"/><path class="ho6a3e0mt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:matrix"} {...others} />);
}

export default Component;
