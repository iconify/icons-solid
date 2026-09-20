import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ewtvdy.css';
import '../../css/k/k__vmq.css';
import '../../css/r/rje0ii.css';
import '../../css/u/ul_dtz.css';
import '../../css/b/b9-9ed.css';
import '../../css/f/f7q-gn.css';
import '../../css/l/lsejuv.css';
import '../../css/y/ydovum.css';
import '../../css/x/xiaare.css';
import '../../css/s/so-from-60.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGwhxeVc3G"><path class="ewtvdy k__vmq"/><path class="ewtvdy rje0ii"/><path class="ewtvdy ul_dtz"/><path class="b9-9ed ewtvdy"/><path class="f7q-gn vknz6y"/></mask></defs><path mask="url(#SVGwhxeVc3G)" class="lsejuv ydovum"/><path class="vknz6y xiaare ydovum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:emoji-cry"} {...others} />);
}

export default Component;
