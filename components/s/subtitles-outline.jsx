import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dtlaqnd5k.css';
import '../../css/p/pj4d7-beq.css';
import '../../css/v/vdr9l434z.css';
import '../../css/a/a9o2u2byj.css';
import '../../css/u/u6oc6ztij.css';
import '../../css/u/upmmfltsf.css';
import '../../css/r/rw8vmfixi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dtlaqnd5k"/><path class="pj4d7-beq"/><path class="vdr9l434z"/><path class="a9o2u2byj"/><path class="u6oc6ztij"/><path class="upmmfltsf"/><path clip-rule="evenodd" class="rw8vmfixi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:subtitles-outline"} {...others} />);
}

export default Component;
