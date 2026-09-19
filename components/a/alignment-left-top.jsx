import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/l/ljdas5boi.css';
import '../../css/u/uzhc-bb2f.css';
import '../../css/l/lxrrntk3f.css';
import '../../css/v/v5wk-abnk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><rect class="ljdas5boi"/><path class="uzhc-bb2f"/><path class="lxrrntk3f"/><path class="v5wk-abnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:alignment-left-top"} {...others} />);
}

export default Component;
