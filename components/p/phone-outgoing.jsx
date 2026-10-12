import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xvyqx1knh.css';
import '../../css/t/tiggr9bik.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xvyqx1knh"/><path class="tiggr9bik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:phone-outgoing"} {...others} />);
}

export default Component;
