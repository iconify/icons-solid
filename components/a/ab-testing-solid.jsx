import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/luxx0zeko.css';
import '../../css/o/oc-e4mb7v.css';
import '../../css/i/i8e6vr1if.css';
import '../../css/w/wut-a81uk.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="luxx0zeko"/><path clip-rule="evenodd" class="oc-e4mb7v"/><path class="i8e6vr1if"/><path clip-rule="evenodd" class="wut-a81uk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:ab-testing-solid"} {...others} />);
}

export default Component;
