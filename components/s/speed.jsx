import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ytag3o.css';
import '../../css/o/o4f3wc.css';
import '../../css/l/lsejuv.css';
import '../../css/y/ydovum.css';
import '../../css/o/osyjhu.css';
import '../../css/s/so-from-56.css';
import '../../css/d/d-6w1d6t.css';
import '../../css/t/tr-sjojgf.css';
import '../../css/d/d-emobes.css';
import '../../css/t/tr-xcta7f.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-32p-1w.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGeVJTweHc"><path class="ytag3o"/><path class="o4f3wc"/></mask></defs><path mask="url(#SVGeVJTweHc)" class="lsejuv ydovum"/><path class="osyjhu ydovum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:speed"} {...others} />);
}

export default Component;
