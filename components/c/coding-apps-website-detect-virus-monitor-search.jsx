import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/t95xj-bfg.css';
import '../../css/s/s-xmkv83b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="t95xj-bfg"/><path class="s-xmkv83b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:coding-apps-website-detect-virus-monitor-search"} {...others} />);
}

export default Component;
