import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ovnxxjr7z.css';
import '../../css/h/hwz_6yimg.css';
import '../../css/z/zjr4rubih.css';
import '../../css/k/k7jxl76jg.css';
import '../../css/s/s6347ob1z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ovnxxjr7z"/><path class="hwz_6yimg"/><path class="zjr4rubih"/><path class="k7jxl76jg"/><path class="s6347ob1z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:git-branch-duotone"} {...others} />);
}

export default Component;
