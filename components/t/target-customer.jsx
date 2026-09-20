import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pgjdvv67z.css';
import '../../css/t/ttm_7fxim.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="pgjdvv67z"/><path class="ttm_7fxim"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:target-customer"} {...others} />);
}

export default Component;
