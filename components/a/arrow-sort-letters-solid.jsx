import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/k/k1_5kpb5d.css';
import '../../css/f/f2fvd5b0h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="k1_5kpb5d"/><path class="f2fvd5b0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:arrow-sort-letters-solid"} {...others} />);
}

export default Component;
