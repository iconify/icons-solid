import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ovsyq3krw.css';
import '../../css/r/r4-qnybet.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="ovsyq3krw"/><circle class="r4-qnybet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:question-mark-stroke-12"} {...others} />);
}

export default Component;
