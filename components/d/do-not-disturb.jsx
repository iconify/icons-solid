import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x8550rb9o.css';
import '../../css/d/dvr3kccns.css';
import '../../css/z/z3s59cbin.css';

const viewBox = {"width":10,"height":24};
const content = `<path class="x8550rb9o"/><path class="dvr3kccns"/><path class="z3s59cbin"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:do-not-disturb"} {...others} />);
}

export default Component;
