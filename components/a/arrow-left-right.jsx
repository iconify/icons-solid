import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/gbgainu9d.css';
import '../../css/w/wnisdfbfp.css';
import '../../css/o/okn4ugb4f.css';
import '../../css/x/xblv9e62x.css';
import '../../css/d/dh6s3uory.css';
import '../../css/d/dsuspebxf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="gbgainu9d wm-shadow"/><path class="wnisdfbfp"/><path class="okn4ugb4f"/><path class="xblv9e62x"/><path class="dh6s3uory wm-shine"/><path class="dsuspebxf wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:arrow-left-right"} {...others} />);
}

export default Component;
