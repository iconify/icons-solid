import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/s/sscp9nb0a.css';
import '../../css/g/gx_zpc8fr.css';
import '../../css/f/ffm55kuxg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="sscp9nb0a"/><path class="gx_zpc8fr"/><path class="ffm55kuxg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:game"} {...others} />);
}

export default Component;
