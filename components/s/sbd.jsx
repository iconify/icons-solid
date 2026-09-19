import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wq2q99b3h.css';
import '../../css/i/ise5_fzgd.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="wq2q99b3h"/><path class="ise5_fzgd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:sbd"} {...others} />);
}

export default Component;
