import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wqwf-7vsq.css';
import '../../css/n/nmmrovbyv.css';
import '../../css/t/tv10vqcvc.css';
import '../../css/l/l36zp4b5z.css';
import '../../css/v/vcxyiaban.css';
import '../../css/q/qlft06buj.css';

const viewBox = {"width":32,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wqwf-7vsq"/><path class="nmmrovbyv"/><path clip-rule="evenodd" class="tv10vqcvc"/><path clip-rule="evenodd" class="l36zp4b5z"/><path clip-rule="evenodd" class="vcxyiaban"/><path clip-rule="evenodd" class="qlft06buj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:my"} {...others} />);
}

export default Component;
