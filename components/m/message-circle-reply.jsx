import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gn2ydibpp.css';
import '../../css/n/njvarwbry.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gn2ydibpp"/><path class="njvarwbry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-circle-reply"} {...others} />);
}

export default Component;
