import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a4fel-blc.css';
import '../../css/h/hxl5el8-f.css';
import '../../css/o/oy-e8-1zv.css';
import '../../css/t/twh1bab_z.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><circle class="a4fel-blc"/><circle class="hxl5el8-f"/><circle class="oy-e8-1zv"/><path class="twh1bab_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:git-fork"} {...others} />);
}

export default Component;
