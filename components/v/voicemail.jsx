import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/s/s_s7207zu.css';
import '../../css/z/zlu3s1tvg.css';
import '../../css/z/z9kwr8bqy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="s_s7207zu"/><path class="zlu3s1tvg"/><path class="z9kwr8bqy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:voicemail"} {...others} />);
}

export default Component;
