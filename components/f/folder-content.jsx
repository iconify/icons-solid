import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zzkxxlbjg.css';
import '../../css/a/a5g1qzb5k.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zzkxxlbjg"/><path class="a5g1qzb5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-content"} {...others} />);
}

export default Component;
