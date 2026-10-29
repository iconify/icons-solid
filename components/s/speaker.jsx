import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/ue-e6sq2m.css';
import '../../css/y/yzko-bq0s.css';
import '../../css/x/x3oxcxpbo.css';
import '../../css/c/cjd02tb-f.css';
import '../../css/z/zfrcmvb1o.css';
import '../../css/x/x96coqb1v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="ue-e6sq2m wm-shadow"/><path class="yzko-bq0s"/><path class="x3oxcxpbo"/><path class="cjd02tb-f"/><path class="wm-shine zfrcmvb1o"/><path class="wm-deco x96coqb1v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:speaker"} {...others} />);
}

export default Component;
