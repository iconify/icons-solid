import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fdzs2tyxu.css';
import '../../css/t/t982gubhv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fdzs2tyxu"/><path class="t982gubhv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:layout-sidebar-left-collapse"} {...others} />);
}

export default Component;
