import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uiabv1bfo.css';
import '../../css/x/x-wib9s9o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="uiabv1bfo"/><path class="x-wib9s9o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hierarchy-square-02"} {...others} />);
}

export default Component;
