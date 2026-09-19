import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/k/kdt884bvj.css';
import '../../css/z/z7fxsb-bo.css';
import '../../css/l/l_4sj533p.css';
import '../../css/x/x7w7tncsi.css';
import '../../css/j/jq35rccjf.css';
import '../../css/a/a8v477jur.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><circle class="kdt884bvj"/><path class="z7fxsb-bo"/><path class="l_4sj533p"/><path class="x7w7tncsi"/><path class="jq35rccjf"/><path class="a8v477jur"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:timer"} {...others} />);
}

export default Component;
