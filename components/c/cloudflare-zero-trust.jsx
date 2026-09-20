import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zm04citcf.css';
import '../../css/k/ke05x4qzq.css';
import '../../css/m/mnll-hb2q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zm04citcf"/><path class="ke05x4qzq"/><path class="mnll-hb2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cloudflare-zero-trust"} {...others} />);
}

export default Component;
