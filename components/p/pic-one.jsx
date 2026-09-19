import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/p/pbruvwbic.css';
import '../../css/h/h0rc5n0sv.css';
import '../../css/r/rcz8-cbpt.css';
import '../../css/e/e1eumrgmo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><circle class="pbruvwbic"/><path class="h0rc5n0sv"/><circle class="rcz8-cbpt"/><path class="e1eumrgmo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:pic-one"} {...others} />);
}

export default Component;
