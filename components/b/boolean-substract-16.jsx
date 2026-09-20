import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z3d_qp7ez.css';
import '../../css/m/ml-m03v8z.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="z3d_qp7ez"/><path clip-rule="evenodd" class="ml-m03v8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:boolean-substract-16"} {...others} />);
}

export default Component;
