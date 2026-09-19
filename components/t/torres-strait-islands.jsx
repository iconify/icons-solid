import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/p/p7u1zwb7z.css';
import '../../css/w/w5dx0bcnx.css';
import '../../css/a/albi6hp1b.css';
import '../../css/t/ttstsac7s.css';
import '../../css/z/z8dpbzzhg.css';
import '../../css/w/w_1cmukes.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="circleFlagsTorresStraitIslands0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsTorresStraitIslands0)"><path class="p7u1zwb7z"/><path class="w5dx0bcnx"/><path class="albi6hp1b"/><path class="ttstsac7s"/><path class="z8dpbzzhg"/><path class="w_1cmukes"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:torres-strait-islands"} {...others} />);
}

export default Component;
