import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u6myxsaev.css';
import '../../css/j/jvtjbnueh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="u6myxsaev"/><path class="jvtjbnueh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:square-arrow-reload-01"} {...others} />);
}

export default Component;
