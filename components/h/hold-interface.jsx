import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/a/ajyf3nzah.css';
import '../../css/s/sqkeg0bva.css';
import '../../css/y/yb958u6-f.css';
import '../../css/f/f4un4zb0e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="ajyf3nzah"/><path class="sqkeg0bva"/><rect class="yb958u6-f"/><path class="f4un4zb0e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:hold-interface"} {...others} />);
}

export default Component;
