import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/n00dcfb1c.css';
import '../../css/n/n1jqvfb0i.css';
import '../../css/o/ouz__2zvt.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="n00dcfb1c"/><path class="n1jqvfb0i"/><path class="ouz__2zvt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:crop-image"} {...others} />);
}

export default Component;
