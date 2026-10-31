import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/p/ppias5f-m.css';
import '../../css/b/bkxgvjb9v.css';
import '../../css/r/r43my2bli.css';
import '../../css/a/a83wz2qox.css';
import '../../css/j/jpex_pbvt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ppias5f-m"/><path class="bkxgvjb9v wm-shine"/><path class="r43my2bli"/><path class="a83wz2qox"/><path class="jpex_pbvt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:rolling-pin"} {...others} />);
}

export default Component;
