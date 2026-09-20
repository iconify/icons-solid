import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pwiyovb5b.css';
import '../../css/b/bbicxkb-t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect transform="matrix(1 0 0 -1 3.75 20.25)" class="pwiyovb5b"/><path class="bbicxkb-t"/><rect transform="matrix(1 0 0 -1 3.75 10.25)" class="pwiyovb5b"/><rect transform="matrix(1 0 0 -1 13.75 10.25)" class="pwiyovb5b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:app-remove"} {...others} />);
}

export default Component;
