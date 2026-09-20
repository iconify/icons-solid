import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/evd8kfjws.css';
import '../../css/h/hxci04b3v.css';
import '../../css/w/wrzgswrqk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="evd8kfjws"/><path clip-rule="evenodd" class="hxci04b3v"/><path class="wrzgswrqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:leptonai"} {...others} />);
}

export default Component;
