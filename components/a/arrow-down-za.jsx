import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aa9di2ohz.css';
import '../../css/c/c7oif2b9e.css';
import '../../css/p/pfl1vrb9h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="aa9di2ohz"/><path class="c7oif2b9e"/><path class="pfl1vrb9h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:arrow-down-za"} {...others} />);
}

export default Component;
