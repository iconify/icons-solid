import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h988dbzhz.css';
import '../../css/k/k9a6unbxx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="h988dbzhz"/><path class="k9a6unbxx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:straight-edge"} {...others} />);
}

export default Component;
