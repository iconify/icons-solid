import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/q/qg9w3n3bs.css';
import '../../css/s/s8127tbcg.css';
import '../../css/k/k76zracww.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="qg9w3n3bs"/><ellipse class="s8127tbcg"/><path class="k76zracww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:database"} {...others} />);
}

export default Component;
