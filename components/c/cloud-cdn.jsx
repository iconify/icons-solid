import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/du8w8acry.css';
import '../../css/d/derbi0b0z.css';
import '../../css/c/csr7k5b0k.css';
import '../../css/s/s6vp0zb_v.css';
import '../../css/h/hqqixg2zq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="du8w8acry"/><path class="derbi0b0z"/><path class="csr7k5b0k"/><path class="s6vp0zb_v"/><path class="hqqixg2zq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-cdn"} {...others} />);
}

export default Component;
