import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/eoyo7mb1z.css';
import '../../css/m/m8fqv418y.css';
import '../../css/e/eoec-qy5u.css';
import '../../css/b/bb82cgb6x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="eoyo7mb1z"/><path class="m8fqv418y"/><path class="eoec-qy5u"/><path class="bb82cgb6x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:quote-down"} {...others} />);
}

export default Component;
