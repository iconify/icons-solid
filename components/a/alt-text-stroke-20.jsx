import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cfe6msdjj.css';
import '../../css/c/cm27p2byo.css';
import '../../css/z/zfvicoeco.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cfe6msdjj"/><path class="cm27p2byo"/><path class="zfvicoeco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:alt-text-stroke-20"} {...others} />);
}

export default Component;
