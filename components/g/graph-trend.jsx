import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zp_2ozb4w.css';
import '../../css/f/famexubdz.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="zp_2ozb4w"/><path class="famexubdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:graph-trend"} {...others} />);
}

export default Component;
