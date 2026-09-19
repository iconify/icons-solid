import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/ho3figeqy.css';
import '../../css/b/bfe2v863c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ho3figeqy"/><path class="bfe2v863c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ratio"} {...others} />);
}

export default Component;
