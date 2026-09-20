import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zgihau-wd.css';
import '../../css/s/s5od5637z.css';
import '../../css/o/olmyeubsp.css';

const viewBox = {"width":1039.699,"height":585.831};
const content = `<path class="zgihau-wd"/><path class="s5od5637z"/><path class="olmyeubsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:el-corte-ingles"} {...others} />);
}

export default Component;
