import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dp6ii9kxw.css';
import '../../css/r/r1mqdsc2j.css';
import '../../css/p/p4w_o3eju.css';
import '../../css/r/r53j-lbfc.css';
import '../../css/v/vzf63iett.css';
import '../../css/o/o4c3w2bda.css';
import '../../css/u/uc92ol4kn.css';
import '../../css/r/rx0cmqoiw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="dp6ii9kxw"/><path class="r1mqdsc2j"/><path class="p4w_o3eju"/><path class="r53j-lbfc"/><path class="vzf63iett"/><path class="o4c3w2bda"/><path class="uc92ol4kn"/><path class="rx0cmqoiw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:walker"} {...others} />);
}

export default Component;
