import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/a/a5q79_b6v.css';
import '../../css/r/rgdjxmvdm.css';
import '../../css/o/osc7ihbyp.css';
import '../../css/v/v15-5xbdo.css';
import '../../css/o/og01tokas.css';
import '../../css/a/acikrkm6z.css';
import '../../css/u/utje4xbul.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="a5q79_b6v"/><path class="rgdjxmvdm"/><path class="osc7ihbyp wm-shine"/><path class="v15-5xbdo wm-k"/><path class="og01tokas wm-a"/><path class="acikrkm6z"/><path class="utje4xbul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:hand-heart"} {...others} />);
}

export default Component;
