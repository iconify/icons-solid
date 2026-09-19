import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s86kprbuh.css';
import '../../css/r/rvt60jb_f.css';
import '../../css/o/odd3dzbvb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s86kprbuh"/><path clip-rule="evenodd" class="rvt60jb_f"/><path class="odd3dzbvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:behance-outline"} {...others} />);
}

export default Component;
