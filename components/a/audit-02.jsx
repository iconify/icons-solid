import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nz3qfzbna.css';
import '../../css/k/k-e9vg24e.css';
import '../../css/j/jl9f6f4iq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="nz3qfzbna"/><path class="k-e9vg24e"/><path class="jl9f6f4iq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:audit-02"} {...others} />);
}

export default Component;
