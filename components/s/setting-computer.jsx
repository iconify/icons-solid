import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/h/hq5j0kbho.css';
import '../../css/a/ah51uhl8u.css';
import '../../css/i/iug4c3bzv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="hq5j0kbho"/><circle class="ah51uhl8u"/><path class="iug4c3bzv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:setting-computer"} {...others} />);
}

export default Component;
