import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/retj535lv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="retj535lv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:chevrons-down-right-solid"} {...others} />);
}

export default Component;
