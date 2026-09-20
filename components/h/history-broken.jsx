import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kk45u3h5t.css';
import '../../css/k/k_dy6kbnl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kk45u3h5t"/><path class="k_dy6kbnl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:history-broken"} {...others} />);
}

export default Component;
