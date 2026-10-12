import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wgtaqgb7g.css';
import '../../css/i/i0lowaczl.css';
import '../../css/z/zo595bdbk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wgtaqgb7g"/><path class="i0lowaczl"/><path class="zo595bdbk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:people-stroke-20"} {...others} />);
}

export default Component;
