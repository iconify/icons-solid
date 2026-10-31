import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/m/m9ll0eb5n.css';
import '../../css/y/yuobg4bux.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="m9ll0eb5n"/><path class="wm-deco yuobg4bux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:list-filter"} {...others} />);
}

export default Component;
