import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/euzd-wbuo.css';
import '../../css/z/z3wkr3_hc.css';
import '../../css/o/o4lxspb9v.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="euzd-wbuo"/><path class="z3wkr3_hc"/><path class="o4lxspb9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:cursor-arrow-ripple-16-solid"} {...others} />);
}

export default Component;
