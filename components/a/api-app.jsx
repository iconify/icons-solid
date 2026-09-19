import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/s/sh2szbc6h.css';
import '../../css/k/kzochbc7e.css';
import '../../css/z/zhr8h_jpw.css';
import '../../css/g/goslebblv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="sh2szbc6h"/><path class="kzochbc7e"/><path class="zhr8h_jpw"/><path class="goslebblv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:api-app"} {...others} />);
}

export default Component;
