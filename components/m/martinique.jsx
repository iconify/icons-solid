import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/socnatb_v.css';
import '../../css/o/oyw6nnb2s.css';
import '../../css/x/xh-ojeezs.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="socnatb_v"/><path class="oyw6nnb2s"/><path class="xh-ojeezs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:martinique"} {...others} />);
}

export default Component;
