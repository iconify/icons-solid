import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uckfmf0pp.css';
import '../../css/p/pz16v8edt.css';
import '../../css/r/rxtbfzqvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="uckfmf0pp"/><path class="pz16v8edt"/><path class="rxtbfzqvx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:tree-deciduous"} {...others} />);
}

export default Component;
