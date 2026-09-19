import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/g/gsanjh7bp.css';
import '../../css/g/g6yjxub8q.css';
import '../../css/i/imnk_rbly.css';
import '../../css/k/kk6i7cvcd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="gsanjh7bp"/><path class="g6yjxub8q"/><path class="imnk_rbly"/><rect class="kk6i7cvcd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:delivery"} {...others} />);
}

export default Component;
