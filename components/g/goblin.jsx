import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pren13bwq.css';
import '../../css/p/p5dxpkfgw.css';
import '../../css/u/u4z7v9_sz.css';
import '../../css/f/fnrwmwo1i.css';
import '../../css/n/nh9hh7bwx.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="pren13bwq"/><path class="p5dxpkfgw"/><path class="u4z7v9_sz"/><path class="fnrwmwo1i"/><path class="nh9hh7bwx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:goblin"} {...others} />);
}

export default Component;
