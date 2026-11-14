import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gvqvq1b1k.css';
import '../../css/y/ysq2eccai.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gvqvq1b1k"/><path class="ysq2eccai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-lock-02"} {...others} />);
}

export default Component;
