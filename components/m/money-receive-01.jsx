import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/igh-6877r.css';
import '../../css/g/g48w89bvm.css';
import '../../css/y/yx1j7mbhh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="igh-6877r"/><path class="g48w89bvm"/><path class="yx1j7mbhh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:money-receive-01"} {...others} />);
}

export default Component;
