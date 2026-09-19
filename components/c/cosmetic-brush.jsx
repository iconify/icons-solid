import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/w/wrovlccxw.css';
import '../../css/n/nego-k8tl.css';
import '../../css/x/xpluur1uo.css';
import '../../css/s/sptemzbds.css';
import '../../css/s/snn_uxbxk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="wrovlccxw"/><path class="nego-k8tl"/><path class="xpluur1uo"/><path class="sptemzbds"/><path class="snn_uxbxk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:cosmetic-brush"} {...others} />);
}

export default Component;
