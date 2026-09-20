import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/onbtvybjc.css';
import '../../css/w/wwgxsc4ns.css';
import '../../css/z/z3q3mgbcd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="onbtvybjc"/><path class="wwgxsc4ns"/><path class="z3q3mgbcd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:coin-shine-16"} {...others} />);
}

export default Component;
