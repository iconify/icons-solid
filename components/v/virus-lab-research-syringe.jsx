import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/urqs7tbta.css';
import '../../css/t/t_572scym.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="urqs7tbta"/><path class="t_572scym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:virus-lab-research-syringe"} {...others} />);
}

export default Component;
