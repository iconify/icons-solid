import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gu9200tlk.css';
import '../../css/u/u6uh8ob_t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="gu9200tlk"/><path class="u6uh8ob_t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:badge-check"} {...others} />);
}

export default Component;
