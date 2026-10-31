import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/i/iaj7s3_yg.css';
import '../../css/z/znvz1583k.css';
import '../../css/i/ieozswbpg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="iaj7s3_yg wm-k"/><path class="wm-a znvz1583k"/><path class="ieozswbpg wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:maximize"} {...others} />);
}

export default Component;
