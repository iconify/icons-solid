import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cdyb-8bvn.css';
import '../../css/v/ve0oupm9c.css';
import '../../css/t/tdc1jtcxs.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cdyb-8bvn"/><path class="ve0oupm9c"/><path class="tdc1jtcxs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:money-wallet"} {...others} />);
}

export default Component;
