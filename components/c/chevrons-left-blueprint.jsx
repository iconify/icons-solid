import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/q/qhxnkgbtu.css';
import '../../css/h/hjfiyp-px.css';
import '../../css/u/uwm4jbcqe.css';
import '../../css/c/c-jjv0dny.css';
import '../../css/f/ff-f2dk6p.css';
import '../../css/r/r9nf9fbhd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="qhxnkgbtu wm-deco"/><path class="hjfiyp-px wm-deco"/><path class="uwm4jbcqe wm-k"/><path class="c-jjv0dny wm-a"/><path class="ff-f2dk6p wm-k"/><path class="r9nf9fbhd wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chevrons-left-blueprint"} {...others} />);
}

export default Component;
