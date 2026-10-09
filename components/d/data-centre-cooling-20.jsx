import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n785abbjb.css';
import '../../css/b/bps3txb3f.css';
import '../../css/y/yaj4psbrg.css';
import '../../css/e/euf1knnse.css';
import '../../css/u/ujaxlznen.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n785abbjb"/><path class="bps3txb3f"/><path class="yaj4psbrg"/><path class="euf1knnse"/><path class="ujaxlznen"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:data-centre-cooling-20"} {...others} />);
}

export default Component;
