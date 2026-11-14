import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jau8m-b5k.css';
import '../../css/l/lcibjue0b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jau8m-b5k"/><path class="lcibjue0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:folder-library"} {...others} />);
}

export default Component;
