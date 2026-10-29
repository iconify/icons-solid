import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ir44ts29y.css';
import '../../css/q/qs6i_jb_m.css';
import '../../css/d/dm2_wt_sl.css';
import '../../css/c/cy6rzqb0a.css';
import '../../css/p/p7up84i1h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ir44ts29y wm-k"/><path class="qs6i_jb_m wm-k"/><path class="dm2_wt_sl wm-k"/><path class="cy6rzqb0a wm-a"/><path class="p7up84i1h wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:cat"} {...others} />);
}

export default Component;
