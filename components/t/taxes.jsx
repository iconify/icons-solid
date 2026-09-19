import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/ti89meu_q.css';
import '../../css/t/tse8fjn3b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ti89meu_q"/><path class="tse8fjn3b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:taxes"} {...others} />);
}

export default Component;
