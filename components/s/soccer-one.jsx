import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/exs-2eb4s.css';
import '../../css/c/cv680t3gn.css';
import '../../css/g/gs46m-avx.css';
import '../../css/e/e_k1zj_sq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="exs-2eb4s"/><path class="cv680t3gn"/><path class="gs46m-avx"/><path class="e_k1zj_sq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:soccer-one"} {...others} />);
}

export default Component;
