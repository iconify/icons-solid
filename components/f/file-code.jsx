import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yxjk4pb-t.css';
import '../../css/n/n-pie3b0w.css';
import '../../css/i/irvjd2qty.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yxjk4pb-t"/><path class="n-pie3b0w"/><path class="irvjd2qty"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-code"} {...others} />);
}

export default Component;
