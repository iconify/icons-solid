import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/syfbt_k0c.css';
import '../../css/x/xemxelb-k.css';
import '../../css/i/iqucf9blp.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="syfbt_k0c"/><path class="xemxelb-k"/><path class="iqucf9blp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:license"} {...others} />);
}

export default Component;
