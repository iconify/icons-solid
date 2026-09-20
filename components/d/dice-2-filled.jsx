import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tco8aibtf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tco8aibtf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:dice-2-filled"} {...others} />);
}

export default Component;
