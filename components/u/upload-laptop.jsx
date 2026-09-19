import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/o/ok3giiwjs.css';
import '../../css/m/mp3b3lb8i.css';
import '../../css/m/mtk09za2a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="ok3giiwjs"/><path class="mp3b3lb8i"/><path class="mtk09za2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:upload-laptop"} {...others} />);
}

export default Component;
