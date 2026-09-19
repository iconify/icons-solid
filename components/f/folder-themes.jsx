import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zzkxxlbjg.css';
import '../../css/v/v5tuebber.css';
import '../../css/a/apt0ate_c.css';
import '../../css/p/pwxs7vx-g.css';
import '../../css/o/oz9hddcsy.css';
import '../../css/b/bo5hnu2as.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zzkxxlbjg"/><g class="v5tuebber"><path transform="matrix(.41667 0 0 .4167 6.75 6.747)" class="apt0ate_c"/><path transform="matrix(.41667 0 0 .4167 6.75 6.747)" class="pwxs7vx-g"/><path transform="matrix(.41667 0 0 .4167 6.75 6.747)" class="oz9hddcsy"/><path transform="matrix(.41667 0 0 .4167 6.75 6.747)" class="bo5hnu2as"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-themes"} {...others} />);
}

export default Component;
