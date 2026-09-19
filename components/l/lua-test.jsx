import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o58hkebvg.css';
import '../../css/b/bko_cabbv.css';
import '../../css/j/j-npdpb0r.css';
import '../../css/e/eggq918-u.css';
import '../../css/v/vkxno4e2f.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="o58hkebvg"><path class="bko_cabbv"/><g class="j-npdpb0r"><path class="eggq918-u"/><path class="vkxno4e2f"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:lua-test"} {...others} />);
}

export default Component;
