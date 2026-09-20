import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s7x5h9bzy.css';
import '../../css/m/m9f4pab2v.css';
import '../../css/q/qsk929b6n.css';
import '../../css/r/rny43f2ab.css';
import '../../css/n/ni6sd1g1h.css';
import '../../css/u/up-nl0y2v.css';
import '../../css/s/snp287xku.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s7x5h9bzy"/><path class="m9f4pab2v"/><path class="qsk929b6n"/><path class="rny43f2ab"/><path class="ni6sd1g1h"/><path class="up-nl0y2v"/><path class="snp287xku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:nepal"} {...others} />);
}

export default Component;
