import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/clsdao61r.css';
import '../../css/l/l3ykglrhy.css';
import '../../css/c/c223jf_pj.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="clsdao61r"><path class="l3ykglrhy"/><path class="c223jf_pj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:snowpack"} {...others} />);
}

export default Component;
