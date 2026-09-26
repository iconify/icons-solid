import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/md2-ubbkw.css';
import '../../css/w/wjnwtubpm.css';
import '../../css/w/w3b9nxekf.css';
import '../../css/w/w3fj3ibba.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="md2-ubbkw"/><path class="wjnwtubpm"/><path class="w3b9nxekf"/><path class="w3fj3ibba"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chevrons-up-down-broken"} {...others} />);
}

export default Component;
