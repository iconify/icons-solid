import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jt23tkppp.css';
import '../../css/h/hrmz_5b-w.css';
import '../../css/o/orc4cutqc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jt23tkppp"/><path class="hrmz_5b-w"/><path class="orc4cutqc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:graph-infected-increasing"} {...others} />);
}

export default Component;
