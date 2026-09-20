import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ab4azpbnj.css';
import '../../css/q/qw5p-6bvx.css';
import '../../css/m/mlz_qs5ec.css';
import '../../css/p/p7g88_b9s.css';
import '../../css/v/vh1dgbcue.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ab4azpbnj"/><path class="qw5p-6bvx"/><path class="mlz_qs5ec"/><circle class="p7g88_b9s"/><circle class="vh1dgbcue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:basket-alt-3-light"} {...others} />);
}

export default Component;
