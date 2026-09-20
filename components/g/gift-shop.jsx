import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-ft4gl8r.css';
import '../../css/n/nn7iw1brc.css';
import '../../css/z/zackx91ue.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="n-ft4gl8r"/><path class="nn7iw1brc"/><path class="zackx91ue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:gift-shop"} {...others} />);
}

export default Component;
