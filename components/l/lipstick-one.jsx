import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g54fotb1f.css';
import '../../css/c/cf52fycgx.css';
import '../../css/u/u5_5228jl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="g54fotb1f"><path class="cf52fycgx"/><path class="u5_5228jl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:lipstick-one"} {...others} />);
}

export default Component;
