import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rt9b-hb6i.css';
import '../../css/e/esks6_bvk.css';
import '../../css/h/hgxtv_kog.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="rt9b-hb6i"/><path clip-rule="evenodd" class="esks6_bvk"/><path class="hgxtv_kog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:speaker-2-16"} {...others} />);
}

export default Component;
