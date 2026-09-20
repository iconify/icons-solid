import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yvgdpzb2e.css';
import '../../css/b/bca8y5ikh.css';
import '../../css/g/g53rhqk2d.css';
import '../../css/u/uvd47t--g.css';
import '../../css/z/z29psskpr.css';
import '../../css/d/dmep7cbtb.css';
import '../../css/n/nvfpuccka.css';
import '../../css/u/u5b-p8b1f.css';
import '../../css/x/xfe1xqbao.css';
import '../../css/d/d6-_79bij.css';
import '../../css/s/smswef6yk.css';
import '../../css/z/zbsg8nb5p.css';
import '../../css/s/soy828bwq.css';
import '../../css/k/kulbu1b3k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yvgdpzb2e"/><path class="bca8y5ikh"/><path class="g53rhqk2d"/><path class="uvd47t--g"/><path class="z29psskpr"/><path class="dmep7cbtb"/><path class="nvfpuccka"/><path class="u5b-p8b1f"/><path class="xfe1xqbao"/><path class="d6-_79bij"/><path class="smswef6yk"/><path class="zbsg8nb5p"/><path class="soy828bwq"/><path class="kulbu1b3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:man-pouting-1"} {...others} />);
}

export default Component;
