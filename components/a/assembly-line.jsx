import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/b/bdeot9bnh.css';
import '../../css/t/tlktmtbnx.css';
import '../../css/p/plf46m9uf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><circle class="bdeot9bnh"/><path class="tlktmtbnx"/><circle class="plf46m9uf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:assembly-line"} {...others} />);
}

export default Component;
