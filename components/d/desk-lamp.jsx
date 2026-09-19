import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/w/wjkdf8ezk.css';
import '../../css/m/m4655yvtx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="wjkdf8ezk"/><path class="m4655yvtx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:desk-lamp"} {...others} />);
}

export default Component;
