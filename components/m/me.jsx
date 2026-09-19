import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/s/s0379ecdo.css';
import '../../css/z/z2g9mzbpt.css';
import '../../css/n/n62_pvwdn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path clip-rule="evenodd" class="s0379ecdo"/><path class="z2g9mzbpt"/><path class="n62_pvwdn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:me"} {...others} />);
}

export default Component;
