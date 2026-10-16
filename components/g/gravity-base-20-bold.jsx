import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v88ye4bop.css';
import '../../css/r/r8ygzbbjv.css';
import '../../css/y/yfoxxnbix.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="v88ye4bop"/><path class="r8ygzbbjv"/><path class="yfoxxnbix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gravity-base-20-bold"} {...others} />);
}

export default Component;
