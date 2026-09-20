import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p07tmccvv.css';
import '../../css/r/rsa077bjb.css';
import '../../css/k/k0sv_yafg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="p07tmccvv"><path class="rsa077bjb"/><path class="k0sv_yafg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:cast"} {...others} />);
}

export default Component;
