import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xa0m6891z.css';
import '../../css/w/wfk-69bls.css';
import '../../css/s/s6e9ni1pr.css';
import '../../css/i/iat2ybbdf.css';
import '../../css/o/o7pjq7b9o.css';
import '../../css/n/ner30cb-l.css';
import '../../css/d/dlry9rbsb.css';
import '../../css/w/wb050jbib.css';
import '../../css/j/j0sou1jtm.css';
import '../../css/h/h15g_ib9j.css';
import '../../css/x/xlw8olb9p.css';
import '../../css/h/hrxbktbsd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow xa0m6891z"/><path class="wfk-69bls wm-k"/><path class="s6e9ni1pr wm-k"/><path class="iat2ybbdf wm-k"/><path class="o7pjq7b9o wm-k"/><path class="ner30cb-l wm-shine"/><path class="dlry9rbsb wm-k"/><path class="wb050jbib wm-a"/><path class="j0sou1jtm wm-a"/><path class="h15g_ib9j wm-a"/><path class="wm-a xlw8olb9p"/><path class="hrxbktbsd wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:wand"} {...others} />);
}

export default Component;
