import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/h/h8ykdacao.css';
import '../../css/t/t6xf-pbgh.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="h8ykdacao"/><path class="t6xf-pbgh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:nebl"} {...others} />);
}

export default Component;
