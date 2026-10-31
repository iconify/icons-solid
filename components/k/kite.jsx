import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/zr0xv9bws.css';
import '../../css/g/g8aux8lvk.css';
import '../../css/n/ngawthbzl.css';
import '../../css/o/o3fxapa1f.css';
import '../../css/i/ic1cxabqg.css';
import '../../css/o/ot8o8ybbf.css';
import '../../css/w/w73kg3bqt.css';
import '../../css/i/imb2-acpb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow zr0xv9bws"/><path class="g8aux8lvk wm-s"/><path class="ngawthbzl wm-shadow"/><path class="o3fxapa1f"/><path class="ic1cxabqg"/><path class="ot8o8ybbf wm-s"/><path class="w73kg3bqt wm-s"/><path class="imb2-acpb wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:kite"} {...others} />);
}

export default Component;
