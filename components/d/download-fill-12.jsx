import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t2xsqtgqd.css';
import '../../css/p/pdd2_pbvf.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="t2xsqtgqd"/><path class="pdd2_pbvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:download-fill-12"} {...others} />);
}

export default Component;
