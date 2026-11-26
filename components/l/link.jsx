import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c-zrgpb5l.css';
import '../../css/y/ysbr-1dlt.css';
import '../../css/r/r9lwvdm6p.css';
import '../../css/l/lzqaeccfs.css';
import '../../css/h/h-8i2_bzw.css';
import '../../css/a/aifyhgb8i.css';
import '../../css/z/zqa7fpb2o.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="ft5dv1b6b"><g class="c-zrgpb5l"><path class="ysbr-1dlt"/><path class="r9lwvdm6p"/></g><g class="c-zrgpb5l"><path class="lzqaeccfs"/><path class="h-8i2_bzw"/></g><path class="aifyhgb8i"/><path class="zqa7fpb2o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:link"} {...others} />);
}

export default Component;
