import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2k0jn.css';
import '../../css/r/r9h-bm.css';
import '../../css/l/lsejuv.css';
import '../../css/y/ydovum.css';
import '../../css/k/kf3mjr.css';
import '../../css/s/so-from-46.css';
import '../../css/d/d-6w1d6t.css';
import '../../css/t/tr-sjojgf.css';
import '../../css/d/d-b9332p.css';
import '../../css/t/tr-4h7ceu.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-32p-1w.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGqf2zebBy"><path class="w2k0jn"/><path class="r9h-bm"/></mask></defs><path mask="url(#SVGqf2zebBy)" class="lsejuv ydovum"/><path class="kf3mjr ydovum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:speedometer-loop"} {...others} />);
}

export default Component;
