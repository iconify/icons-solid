import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/bxcz3acww.css';
import '../../css/a/abzc4nzcy.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="bxcz3acww"/><path class="abzc4nzcy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-weather-lightning-1-cloud-bolt-storm-weather-thunder-meteorology-lightning"} {...others} />);
}

export default Component;
