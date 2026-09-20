import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jguu9r33v.css';
import '../../css/k/kum_exb2r.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jguu9r33v"/><path clip-rule="evenodd" class="kum_exb2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:purcentage-16"} {...others} />);
}

export default Component;
