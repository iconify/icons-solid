import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hzcfu_bvm.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hzcfu_bvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:sandbox-fill-16"} {...others} />);
}

export default Component;
