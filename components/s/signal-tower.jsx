import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/ztiiwbpek.css';
import '../../css/g/g59usv5zz.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="ztiiwbpek"/><path class="g59usv5zz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:signal-tower"} {...others} />);
}

export default Component;
