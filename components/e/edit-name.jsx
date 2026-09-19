import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/z/z6s5imbxf.css';
import '../../css/u/ue1cjpbqo.css';
import '../../css/u/uqkw_fe5q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><circle class="z6s5imbxf"/><path class="ue1cjpbqo"/><path class="uqkw_fe5q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:edit-name"} {...others} />);
}

export default Component;
