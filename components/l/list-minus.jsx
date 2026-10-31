import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/y/yl7a92tqe.css';
import '../../css/o/okp7pp4nk.css';
import '../../css/y/yuobg4bux.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="wm-k yl7a92tqe"/><path class="okp7pp4nk wm-s"/><path class="wm-deco yuobg4bux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:list-minus"} {...others} />);
}

export default Component;
