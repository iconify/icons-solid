import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rezp8vb_w.css';
import '../../css/i/izyg3f8iv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rezp8vb_w"/><path class="izyg3f8iv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:book-letter"} {...others} />);
}

export default Component;
