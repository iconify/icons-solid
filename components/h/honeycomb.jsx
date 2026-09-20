import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w9qu2hl1q.css';

const viewBox = {"width":50.6,"height":48};
const content = `<path class="w9qu2hl1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:honeycomb"} {...others} />);
}

export default Component;
