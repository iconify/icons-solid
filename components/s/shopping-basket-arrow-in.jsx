import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dgj_hqbie.css';
import '../../css/a/azsn61bmv.css';
import '../../css/f/f1yxoxqse.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dgj_hqbie"/><path class="azsn61bmv"/><path class="f1yxoxqse"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:shopping-basket-arrow-in"} {...others} />);
}

export default Component;
