import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7o6iqeuc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g7o6iqeuc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:presentation-analytics-filled"} {...others} />);
}

export default Component;
