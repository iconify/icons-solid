import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-hqinbet.css';
import '../../css/x/xs145wb_x.css';
import '../../css/k/k3j1totiu.css';
import '../../css/w/w32au1bdo.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="a-hqinbet"/><path class="xs145wb_x"/><path class="k3j1totiu"/><path class="w32au1bdo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:cairo-wordmark"} {...others} />);
}

export default Component;
