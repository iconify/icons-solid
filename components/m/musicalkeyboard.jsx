import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/ql__uvuun.css';
import '../../css/m/m42qaacec.css';
import '../../css/p/pmct9tb7f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ql__uvuun"/><path class="m42qaacec"/><path class="pmct9tb7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:musicalkeyboard"} {...others} />);
}

export default Component;
