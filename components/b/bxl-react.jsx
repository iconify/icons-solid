import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fe65lpnwd.css';
import '../../css/x/xjxgb8bzs.css';
import '../../css/x/xza70ebax.css';
import '../../css/e/eouatib8t.css';
import '../../css/l/llsdk8b1z.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="fe65lpnwd"/><path class="xjxgb8bzs"/><path class="xza70ebax"/><path class="eouatib8t"/><path class="llsdk8b1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-react"} {...others} />);
}

export default Component;
