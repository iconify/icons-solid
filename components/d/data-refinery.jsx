import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g3c_ovw8n.css';
import '../../css/w/w8rkv-bcn.css';
import '../../css/s/s8m5ot9tn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="g3c_ovw8n"/><path class="w8rkv-bcn"/><path class="s8m5ot9tn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:data-refinery"} {...others} />);
}

export default Component;
