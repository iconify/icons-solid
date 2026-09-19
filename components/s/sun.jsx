import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vfjyc5uqq.css';
import '../../css/f/fpgp4bcql.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="vfjyc5uqq"/><path class="fpgp4bcql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:sun"} {...others} />);
}

export default Component;
