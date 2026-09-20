import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mli95hbir.css';
import '../../css/w/wcc88lbyv.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="mli95hbir"/><path clip-rule="evenodd" class="wcc88lbyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:gamepad-shoulder-right-16"} {...others} />);
}

export default Component;
