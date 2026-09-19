import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/b/bxwdkp16c.css';
import '../../css/w/w-5ltnd5j.css';
import '../../css/l/l_t1d5bcy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path clip-rule="evenodd" class="bxwdkp16c"/><path class="w-5ltnd5j"/><path class="l_t1d5bcy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:eyes"} {...others} />);
}

export default Component;
