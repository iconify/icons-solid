import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/i/ic806kb8h.css';
import '../../css/h/hmwcj1thc.css';
import '../../css/h/h19kr0b8c.css';
import '../../css/o/or73ihu0n.css';
import '../../css/e/e47cv6csu.css';
import '../../css/j/jv-k56j0a.css';
import '../../css/b/bubknbbzm.css';
import '../../css/i/igotlz6cn.css';
import '../../css/s/svxjkzbtw.css';
import '../../css/v/vrfkpbbys.css';
import '../../css/k/k6z74gbkx.css';
import '../../css/y/y98vzqcxq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="ic806kb8h"/><path class="hmwcj1thc"/><path class="h19kr0b8c"/><path class="or73ihu0n"/><path class="e47cv6csu"/><path class="jv-k56j0a"/><path class="bubknbbzm"/><path class="igotlz6cn"/><path class="svxjkzbtw"/><path class="vrfkpbbys"/><path class="k6z74gbkx"/><path class="y98vzqcxq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:ungroup"} {...others} />);
}

export default Component;
