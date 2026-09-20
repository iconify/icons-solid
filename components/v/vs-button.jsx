import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hl61pfntu.css';
import '../../css/k/k-eldqbfz.css';
import '../../css/z/zl_j7biam.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};
const content = `<path clip-rule="evenodd" class="hl61pfntu"/><path class="k-eldqbfz"/><path class="zl_j7biam"/><path class="e4zfowz9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:vs-button"} {...others} />);
}

export default Component;
