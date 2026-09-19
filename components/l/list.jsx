import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tn2r_k_3k.css';
import '../../css/t/tng0ocbay.css';
import '../../css/w/wk855qbpc.css';
import '../../css/c/csbi0o7qk.css';

const viewBox = {"width":16,"height":11};
const content = `<circle class="tn2r_k_3k"/><circle class="tng0ocbay"/><circle class="wk855qbpc"/><path class="csbi0o7qk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:list"} {...others} />);
}

export default Component;
