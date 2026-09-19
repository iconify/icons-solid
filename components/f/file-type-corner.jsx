import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fnibq2bka.css';
import '../../css/i/imjck5b5e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fnibq2bka"/><path class="imjck5b5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-type-corner"} {...others} />);
}

export default Component;
