import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/ym1bzlhzg.css';
import '../../css/g/g1z28i47k.css';
import '../../css/i/is3ribb8c.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ym1bzlhzg"/><path class="g1z28i47k"/><path class="is3ribb8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:graphic-tablet-intous-draw"} {...others} />);
}

export default Component;
