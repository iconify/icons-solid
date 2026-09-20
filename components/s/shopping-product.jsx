import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/q/q09jc4p4u.css';
import '../../css/l/l9vwkob2d.css';
import '../../css/b/bpwwcmbnw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="q09jc4p4u"/><path class="l9vwkob2d"/><path class="bpwwcmbnw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:shopping-product"} {...others} />);
}

export default Component;
