import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v2k-dlgsi.css';
import '../../css/d/dtlaqnd5k.css';
import '../../css/z/z66640nvf.css';
import '../../css/v/vdr9l434z.css';
import '../../css/a/a0ycr5bma.css';
import '../../css/u/u6oc6ztij.css';
import '../../css/v/vyjhqsb2w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v2k-dlgsi"/><path class="dtlaqnd5k"/><path class="z66640nvf"/><path class="vdr9l434z"/><path class="a0ycr5bma"/><path class="u6oc6ztij"/><path class="vyjhqsb2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:subtitles-bold-duotone"} {...others} />);
}

export default Component;
