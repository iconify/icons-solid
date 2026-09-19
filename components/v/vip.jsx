import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/d/d2ivtpbat.css';
import '../../css/p/ptxldtbxo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="d2ivtpbat"/><path class="ptxldtbxo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:vip"} {...others} />);
}

export default Component;
