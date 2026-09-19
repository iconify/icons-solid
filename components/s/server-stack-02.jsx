import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/ym0k3ab2z.css';
import '../../css/v/vj_3vlsjo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ym0k3ab2z"/><path class="vj_3vlsjo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:server-stack-02"} {...others} />);
}

export default Component;
