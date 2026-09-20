import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v4hcwpahc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v4hcwpahc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:euro-solid"} {...others} />);
}

export default Component;
