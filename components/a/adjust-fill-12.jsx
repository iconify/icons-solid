import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oc-hat22k.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ae87yac1j.css';
import '../../css/g/gh288vdeb.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="oc-hat22k"/><g class="cuyn6tgcc"><circle class="ae87yac1j"/><circle class="gh288vdeb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:adjust-fill-12"} {...others} />);
}

export default Component;
