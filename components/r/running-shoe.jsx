import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/im2641b7n.css';
import '../../css/b/boesfsbuu.css';
import '../../css/f/fa7o61bst.css';
import '../../css/b/bgak3_b6a.css';
import '../../css/o/o433x3byl.css';
import '../../css/u/uozk2tb2n.css';
import '../../css/d/dyted1u-x.css';
import '../../css/m/mt2gu_5rf.css';
import '../../css/j/jqlo5eb0o.css';
import '../../css/n/nmbbv6dbo.css';
import '../../css/v/vm61hcbpz.css';
import '../../css/j/jhmibpkez.css';
import '../../css/o/o8fgq4l0q.css';
import '../../css/i/io-fkqb-l.css';
import '../../css/m/miq0f90yo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="im2641b7n"/><path class="boesfsbuu"/><path class="fa7o61bst"/><path class="bgak3_b6a"/><path class="o433x3byl"/><path class="uozk2tb2n"/><path class="dyted1u-x"/><path class="mt2gu_5rf"/><path class="jqlo5eb0o"/><path class="nmbbv6dbo"/><path class="vm61hcbpz"/><path class="jhmibpkez"/><path class="o8fgq4l0q"/><path class="io-fkqb-l"/><path class="miq0f90yo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:running-shoe"} {...others} />);
}

export default Component;
