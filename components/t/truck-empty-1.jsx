import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/ppwewybbo.css';
import '../../css/o/oa7yc1b2c.css';
import '../../css/j/jl83oe8na.css';
import '../../css/o/o-wajn3vk.css';
import '../../css/y/yfnmhxb8i.css';
import '../../css/r/rzd5ngk3v.css';
import '../../css/x/x5ajnubnz.css';
import '../../css/v/v06zwdbpn.css';
import '../../css/y/ys_fbcy2v.css';
import '../../css/v/v81jo1blj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ppwewybbo"/><path class="oa7yc1b2c"/><path class="jl83oe8na"/><path class="o-wajn3vk"/><path class="yfnmhxb8i"/><path class="rzd5ngk3v"/><path class="x5ajnubnz"/><path class="v06zwdbpn"/><path class="ys_fbcy2v"/><path class="v81jo1blj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:truck-empty-1"} {...others} />);
}

export default Component;
