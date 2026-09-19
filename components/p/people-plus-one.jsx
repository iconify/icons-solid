import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/clklwbbrf.css';
import '../../css/n/n91qcuztc.css';
import '../../css/a/awxrad2wk.css';
import '../../css/a/asy0_ebcz.css';
import '../../css/t/t74_hubqw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="clklwbbrf"/><path class="n91qcuztc"/><path clip-rule="evenodd" class="awxrad2wk"/><path clip-rule="evenodd" class="asy0_ebcz"/><path class="t74_hubqw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:people-plus-one"} {...others} />);
}

export default Component;
