import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xr61jac5c.css';
import '../../css/n/nggtjyblc.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="xr61jac5c"/><path class="nggtjyblc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:dta"} {...others} />);
}

export default Component;
