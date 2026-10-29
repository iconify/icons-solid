import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/urbrpw7fa.css';
import '../../css/o/ov5ep2g1e.css';
import '../../css/q/qtxam2b_t.css';
import '../../css/c/crin70bsf.css';
import '../../css/u/uysb1cbow.css';
import '../../css/w/wogcsn1_o.css';
import '../../css/g/gzzsexv6d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="urbrpw7fa wm-shadow"/><path class="ov5ep2g1e"/><path class="qtxam2b_t"/><path class="crin70bsf"/><path class="uysb1cbow"/><path class="wm-shine wogcsn1_o"/><path class="gzzsexv6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:play"} {...others} />);
}

export default Component;
