import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-3-isbfd.css';
import '../../css/c/c6irxih5p.css';
import '../../css/z/zyoh9lzam.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="b-3-isbfd clr-i-outline clr-i-outline-path-1"/><path class="c6irxih5p clr-i-outline clr-i-outline-path-2"/><path class="clr-i-outline clr-i-outline-path-3 zyoh9lzam"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:menu-line"} {...others} />);
}

export default Component;
