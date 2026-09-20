import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bufq13isk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bufq13isk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-activity-sharp-fill"} {...others} />);
}

export default Component;
