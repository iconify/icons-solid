import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o4q4os5vq.css';
import '../../css/u/u3riikbtv.css';
import '../../css/x/xnpcv3jbg.css';
import '../../css/p/pspmmnb4w.css';
import '../../css/e/eac3i3b4m.css';
import '../../css/c/chf58z4nv.css';
import '../../css/a/azqeltbsl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o4q4os5vq wm-shadow"/><path class="u3riikbtv"/><path class="xnpcv3jbg"/><path class="pspmmnb4w"/><path class="eac3i3b4m"/><path class="chf58z4nv wm-shine"/><path class="azqeltbsl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:paperclip"} {...others} />);
}

export default Component;
