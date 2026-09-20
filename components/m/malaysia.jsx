import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s7x5h9bzy.css';
import '../../css/c/c_dyc3b7o.css';
import '../../css/h/hj3zw0b9o.css';
import '../../css/u/u_j8embez.css';
import '../../css/q/q32raonkb.css';
import '../../css/s/snp287xku.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s7x5h9bzy"/><path class="c_dyc3b7o"/><path class="hj3zw0b9o"/><path class="u_j8embez"/><path class="q32raonkb"/><path class="snp287xku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:malaysia"} {...others} />);
}

export default Component;
