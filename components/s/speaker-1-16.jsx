import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/quv0rgtyg.css';
import '../../css/h/hgxtv_kog.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="quv0rgtyg"/><path class="hgxtv_kog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:speaker-1-16"} {...others} />);
}

export default Component;
