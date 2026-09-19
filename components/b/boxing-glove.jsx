import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h-n7zzbgh.css';
import '../../css/m/mlrpppb7t.css';
import '../../css/v/vbwyi6mgn.css';
import '../../css/e/etcqljbzx.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="h-n7zzbgh"/><path class="mlrpppb7t"/><path class="vbwyi6mgn"/><path class="etcqljbzx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:boxing-glove"} {...others} />);
}

export default Component;
