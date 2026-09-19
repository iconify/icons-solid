import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r2iitdbys.css';
import '../../css/t/tkiz4rbld.css';
import '../../css/s/s2j1gkbik.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="r2iitdbys"/><path class="tkiz4rbld"/><path class="s2j1gkbik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:arrow-down-right"} {...others} />);
}

export default Component;
