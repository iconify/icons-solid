import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/coegiw3wb.css';
import '../../css/b/b4ez9bbtg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="coegiw3wb"/><path class="b4ez9bbtg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:vectors-pen-add-1"} {...others} />);
}

export default Component;
