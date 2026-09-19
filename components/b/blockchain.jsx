import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/e9118xfzf.css';
import '../../css/k/kgvnf7b1e.css';
import '../../css/e/e7qy39kak.css';
import '../../css/x/x7l9vua2e.css';
import '../../css/x/xcj4vtoso.css';
import '../../css/i/i_hbqwbmk.css';
import '../../css/n/ndl9yvbxy.css';
import '../../css/e/elsu_m2vm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="e9118xfzf"/><path class="kgvnf7b1e"/><path class="e7qy39kak"/><path class="x7l9vua2e"/><path class="xcj4vtoso"/><circle class="i_hbqwbmk"/><circle class="ndl9yvbxy"/><circle class="elsu_m2vm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:blockchain"} {...others} />);
}

export default Component;
