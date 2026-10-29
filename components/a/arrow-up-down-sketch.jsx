import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qygg6abkf.css';
import '../../css/h/h42k6-b2l.css';
import '../../css/v/vd6ip0kos.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qygg6abkf wm-a"/><path class="h42k6-b2l wm-k"/><path class="vd6ip0kos wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:arrow-up-down-sketch"} {...others} />);
}

export default Component;
