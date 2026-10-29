import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/u-bz-v1lz.css';
import '../../css/u/u0llsddbf.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/i/i77ia1-py.css';
import '../../css/o/oryaokatv.css';
import '../../css/e/eojgv56kq.css';
import '../../css/i/iz2alf79m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="u-bz-v1lz wm-deco"/><path class="u0llsddbf wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="i77ia1-py wm-k"/><path class="oryaokatv wm-a"/><path class="eojgv56kq wm-k"/><path class="iz2alf79m wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:radio-tower-blueprint"} {...others} />);
}

export default Component;
