import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/v/vgd8zfbzm.css';
import '../../css/w/wlbeejzvb.css';
import '../../css/e/emzzk7r6k.css';

const viewBox = {"width":1543.43,"height":320};
const content = `<g class="n1mjunbsu"><path class="vgd8zfbzm"/><path class="wlbeejzvb"/><path class="emzzk7r6k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:thingsboard-dark"} {...others} />);
}

export default Component;
