import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xhfxg030t.css';
import '../../css/a/am53vrbsi.css';
import '../../css/y/yhxertb1n.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="xhfxg030t"/><path class="am53vrbsi"/><path class="yhxertb1n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:artificial-intelligence-spark"} {...others} />);
}

export default Component;
