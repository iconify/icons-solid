import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xl5gh8b9t.css';
import '../../css/t/tarmjbcbp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xl5gh8b9t"/><path class="tarmjbcbp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:skull-1"} {...others} />);
}

export default Component;
