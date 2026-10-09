import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kr2cl1avx.css';
import '../../css/y/y_dpcj0im.css';
import '../../css/e/eb25nslsj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kr2cl1avx"/><path class="y_dpcj0im"/><path class="eb25nslsj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tree-20"} {...others} />);
}

export default Component;
