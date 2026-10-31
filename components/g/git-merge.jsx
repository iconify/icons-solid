import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/q/qnx4t3y-j.css';
import '../../css/x/x-pqqv81t.css';
import '../../css/v/va8921bzg.css';
import '../../css/w/wb3c7x6fa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="qnx4t3y-j"/><path class="wm-shine x-pqqv81t"/><path class="va8921bzg"/><path class="wb3c7x6fa wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:git-merge"} {...others} />);
}

export default Component;
