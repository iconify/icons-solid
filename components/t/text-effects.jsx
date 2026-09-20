import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sgtrghm0d.css';
import '../../css/i/ius2dvbcq.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="ft5dv1b6b"><path class="sgtrghm0d"/><path class="ius2dvbcq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:text-effects"} {...others} />);
}

export default Component;
