import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n5aw7n-md.css';
import '../../css/a/aasift6kd.css';
import '../../css/h/h54h6zbmm.css';
import '../../css/o/ob4kuqbkv.css';
import '../../css/h/hwz_6yimg.css';
import '../../css/z/zjr4rubih.css';
import '../../css/t/toittbcbl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n5aw7n-md"/><path class="aasift6kd"/><path class="h54h6zbmm"/><path class="ob4kuqbkv"/><path class="hwz_6yimg"/><path class="zjr4rubih"/><path class="toittbcbl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:git-fork-duotone"} {...others} />);
}

export default Component;
