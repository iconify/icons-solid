import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/j/jtkq8jb8r.css';
import '../../css/c/cbjo6dsyc.css';
import '../../css/c/c1xzn3b5a.css';
import '../../css/s/sxdzfouvy.css';
import '../../css/b/brj5hsq7d.css';
import '../../css/y/yuobg4bux.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="jtkq8jb8r"/><path class="cbjo6dsyc wm-shine"/><path class="c1xzn3b5a wm-k"/><path class="sxdzfouvy wm-a"/><path class="brj5hsq7d wm-s"/><path class="wm-deco yuobg4bux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:sunrise"} {...others} />);
}

export default Component;
