import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zzkxxlbjg.css';
import '../../css/q/qy_pj4bzp.css';
import '../../css/k/kqa5ceb9f.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zzkxxlbjg"/><rect transform="rotate(-45.004)" class="qy_pj4bzp"/><path class="kqa5ceb9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-pre-commit"} {...others} />);
}

export default Component;
