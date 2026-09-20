import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3_m4jflw.css';
import '../../css/a/aaznl0b5w.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="c3_m4jflw"/><path class="aaznl0b5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:vue-solid"} {...others} />);
}

export default Component;
