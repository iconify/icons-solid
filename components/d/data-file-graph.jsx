import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/s_tkimf1c.css';
import '../../css/q/qkdz1mbgd.css';
import '../../css/c/ca-rbu-xa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="s_tkimf1c"/><path class="qkdz1mbgd"/><path class="ca-rbu-xa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:data-file-graph"} {...others} />);
}

export default Component;
