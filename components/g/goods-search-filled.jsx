import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iv5pi-bzy.css';
import '../../css/c/crj_bc0sa.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="iv5pi-bzy"/><path clip-rule="evenodd" class="crj_bc0sa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:goods-search-filled"} {...others} />);
}

export default Component;
