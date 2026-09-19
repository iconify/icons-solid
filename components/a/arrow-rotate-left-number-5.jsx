import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o1auylrms.css';
import '../../css/k/k09h-2h0n.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="o1auylrms"/><path class="k09h-2h0n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:arrow-rotate-left-number-5"} {...others} />);
}

export default Component;
