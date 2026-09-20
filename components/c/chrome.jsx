import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kgv4gybam.css';
import '../../css/v/vb7n012lj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kgv4gybam"/><path class="vb7n012lj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:chrome"} {...others} />);
}

export default Component;
