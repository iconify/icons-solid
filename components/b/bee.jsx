import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x08xerbma.css';
import '../../css/x/xebng-s0v.css';
import '../../css/w/wxzhspb6c.css';
import '../../css/n/n3q464hzm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x08xerbma"/><path class="xebng-s0v"/><path class="wxzhspb6c"/><path class="n3q464hzm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bee"} {...others} />);
}

export default Component;
