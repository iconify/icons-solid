import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wuqr2acil.css';
import '../../css/h/hgef23b7m.css';
import '../../css/k/k30xijbti.css';
import '../../css/p/pw_ntac8e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wuqr2acil"/><path class="hgef23b7m"/><path class="k30xijbti"/><path class="pw_ntac8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chevrons-right-left-line-duotone"} {...others} />);
}

export default Component;
