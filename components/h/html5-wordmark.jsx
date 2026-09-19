import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2l35xbjn.css';
import '../../css/r/rjff3k7ts.css';
import '../../css/a/as2xfh2ea.css';
import '../../css/z/z-s5yzwsp.css';
import '../../css/t/t_drb30wn.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="w2l35xbjn"/><path class="rjff3k7ts"/><path class="as2xfh2ea"/><path class="z-s5yzwsp"/><path class="t_drb30wn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:html5-wordmark"} {...others} />);
}

export default Component;
