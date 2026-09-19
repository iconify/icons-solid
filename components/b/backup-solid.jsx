import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bmdiq6b8t.css';
import '../../css/b/bg4vj1rus.css';
import '../../css/w/wajy9d3qq.css';
import '../../css/x/xh8-ubb1t.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="bmdiq6b8t clr-i-solid clr-i-solid-path-1"/><path class="bg4vj1rus clr-i-solid clr-i-solid-path-2"/><path class="clr-i-solid clr-i-solid-path-3 wajy9d3qq"/><path class="clr-i-solid clr-i-solid-path-4 xh8-ubb1t"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:backup-solid"} {...others} />);
}

export default Component;
