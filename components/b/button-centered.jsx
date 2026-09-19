import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7knn_bjg.css';
import '../../css/k/ksmczrn_i.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="j7knn_bjg"/><path class="ksmczrn_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:button-centered"} {...others} />);
}

export default Component;
