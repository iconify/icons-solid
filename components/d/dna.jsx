import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkyxzwb9q.css';
import '../../css/s/s7_vqqb7b.css';
import '../../css/w/w61q9hymn.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="xkyxzwb9q"><path class="s7_vqqb7b"/><path class="w61q9hymn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:dna"} {...others} />);
}

export default Component;
