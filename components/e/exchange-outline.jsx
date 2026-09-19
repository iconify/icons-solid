import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/f/fngfi_ztl.css';
import '../../css/p/psdf5lb4l.css';
import '../../css/h/h7bcztycq.css';
import '../../css/t/t6c8t7gok.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="fngfi_ztl"/><path class="psdf5lb4l"/><path class="h7bcztycq"/><path class="t6c8t7gok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:exchange-outline"} {...others} />);
}

export default Component;
