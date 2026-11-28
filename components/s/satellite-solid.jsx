import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ijzwfucfc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ijzwfucfc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:satellite-solid"} {...others} />);
}

export default Component;
