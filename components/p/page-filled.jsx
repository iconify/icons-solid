import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zjo68qbsq.css';
import '../../css/u/uhso3bbfp.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="zjo68qbsq"/><path class="uhso3bbfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:page-filled"} {...others} />);
}

export default Component;
