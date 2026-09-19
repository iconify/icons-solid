import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mx8-48i7a.css';
import '../../css/o/o1ic8yb3p.css';
import '../../css/j/jewv0ybko.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="mx8-48i7a"/><path class="o1ic8yb3p"/><path class="jewv0ybko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:text-italic-slash"} {...others} />);
}

export default Component;
