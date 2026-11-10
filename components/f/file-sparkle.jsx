import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ak_vvcbmq.css';
import '../../css/j/jk9qlga9d.css';
import '../../css/h/hx1_3ybbj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ak_vvcbmq"/><path class="jk9qlga9d"/><path class="hx1_3ybbj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-sparkle"} {...others} />);
}

export default Component;
