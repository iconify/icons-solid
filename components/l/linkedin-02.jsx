import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m0-be3bja.css';
import '../../css/k/kqfoc8b5p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="m0-be3bja"/><path class="kqfoc8b5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:linkedin-02"} {...others} />);
}

export default Component;
