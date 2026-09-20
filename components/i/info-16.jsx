import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o14vgl1ja.css';
import '../../css/s/s_w1wxr_g.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="o14vgl1ja"/><path clip-rule="evenodd" class="s_w1wxr_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:info-16"} {...others} />);
}

export default Component;
