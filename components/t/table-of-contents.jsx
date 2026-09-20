import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/eoq-ilkyb.css';
import '../../css/a/ahy7r9h0a.css';
import '../../css/b/bnnnmnbmb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="eoq-ilkyb"/><path class="ahy7r9h0a"/><path vector-effect="non-scaling-stroke" class="bnnnmnbmb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:table-of-contents"} {...others} />);
}

export default Component;
