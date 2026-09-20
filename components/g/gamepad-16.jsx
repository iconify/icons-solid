import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/egfz4htdu.css';
import '../../css/a/as7estb-f.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="egfz4htdu"/><path clip-rule="evenodd" class="as7estb-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:gamepad-16"} {...others} />);
}

export default Component;
