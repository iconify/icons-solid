import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2k0jn.css';
import '../../css/r/rbflbo.css';
import '../../css/l/lsejuv.css';
import '../../css/y/ydovum.css';
import '../../css/d/dyt0mm.css';
import '../../css/s/so-from-46.css';
import '../../css/d/d-6w1d6t.css';
import '../../css/t/tr-sjojgf.css';
import '../../css/d/d-b9332p.css';
import '../../css/t/tr-29mcvx.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-32p-1w.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGEAhLAbRg"><path class="w2k0jn"/><path class="rbflbo"/></mask></defs><path mask="url(#SVGEAhLAbRg)" class="lsejuv ydovum"/><path class="dyt0mm ydovum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:speedometer"} {...others} />);
}

export default Component;
