import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c003g6-7h.css';
import '../../css/u/u19fzjjnv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="c003g6-7h"/><path class="u19fzjjnv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:fan-02"} {...others} />);
}

export default Component;
