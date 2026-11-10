import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rjijzbbea.css';
import '../../css/y/yc1m2ozal.css';
import '../../css/w/wyztu8njq.css';
import '../../css/q/qzo-8rbyh.css';
import '../../css/q/qat2bttar.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rjijzbbea"/><path class="yc1m2ozal"/><path clip-rule="evenodd" class="wyztu8njq"/><path class="qzo-8rbyh"/><path class="qat2bttar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:book-lock"} {...others} />);
}

export default Component;
