import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xdayi_bsv.css';
import '../../css/w/wvxk7s10x.css';
import '../../css/o/o2kynzbon.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xdayi_bsv"/><path class="wvxk7s10x"/><path class="o2kynzbon"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:augmented-reality-outline"} {...others} />);
}

export default Component;
