import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/u/uqc94-bsq.css';
import '../../css/g/gxdjyobdd.css';
import '../../css/n/n5z9vnbeb.css';
import '../../css/x/x9x785x5y.css';
import '../../css/o/o3v7diy0x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="uqc94-bsq"/><path class="gxdjyobdd wm-shine"/><path class="n5z9vnbeb wm-k"/><path class="wm-a x9x785x5y"/><path class="o3v7diy0x wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:shapes"} {...others} />);
}

export default Component;
