import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zc9p_p96d.css';
import '../../css/d/dti_o-b1r.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="zc9p_p96d"/><path class="dti_o-b1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:theme-16"} {...others} />);
}

export default Component;
