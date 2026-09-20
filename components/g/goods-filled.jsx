import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nr38msbnw.css';
import '../../css/h/h_c37acgj.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="nr38msbnw"/><path class="h_c37acgj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:goods-filled"} {...others} />);
}

export default Component;
