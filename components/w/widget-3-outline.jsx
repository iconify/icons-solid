import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uwxn6tu6g.css';
import '../../css/s/s8i43s-5o.css';
import '../../css/g/g-s4t8b6s.css';
import '../../css/b/byc7l7b9c.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="uwxn6tu6g"/><path class="s8i43s-5o"/><path class="g-s4t8b6s"/><path class="byc7l7b9c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:widget-3-outline"} {...others} />);
}

export default Component;
