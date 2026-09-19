import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/p/p9cid6bls.css';
import '../../css/a/a49o2flke.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="p9cid6bls"/><path class="a49o2flke"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:power-outline"} {...others} />);
}

export default Component;
