import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/g/g5gmzrgzu.css';
import '../../css/z/zxgvkqbrh.css';
import '../../css/y/y021bzbie.css';
import '../../css/v/v7jzlzbxs.css';
import '../../css/b/bockxgb7m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="g5gmzrgzu"/><path class="wm-shine zxgvkqbrh"/><path class="wm-k y021bzbie"/><path class="v7jzlzbxs wm-a"/><path class="bockxgb7m wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:key-round"} {...others} />);
}

export default Component;
