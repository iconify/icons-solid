import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gobj20bzp.css';
import '../../css/w/wtcq1zluh.css';
import '../../css/s/s78htrh3u.css';
import '../../css/p/pz-y4i61u.css';
import '../../css/z/z2a3v2bbn.css';
import '../../css/y/y3d5om1xj.css';
import '../../css/e/ewtd9xb1i.css';
import '../../css/p/p5ep79bvm.css';
import '../../css/v/v18-c9bdx.css';
import '../../css/v/vnkix3ban.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gobj20bzp"/><path class="wtcq1zluh"/><path class="s78htrh3u"/><path class="pz-y4i61u"/><path class="z2a3v2bbn"/><path class="y3d5om1xj"/><path class="ewtd9xb1i"/><path class="p5ep79bvm"/><path class="v18-c9bdx"/><path class="vnkix3ban"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:construction"} {...others} />);
}

export default Component;
