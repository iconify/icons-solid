import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zzxfrybrb.css';
import '../../css/g/gxe7jmbor.css';
import '../../css/t/tp9_xo__k.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zzxfrybrb"/><path class="gxe7jmbor"/><path class="tp9_xo__k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:calendar-add-alt"} {...others} />);
}

export default Component;
