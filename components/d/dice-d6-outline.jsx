import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5d4zmleu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e5d4zmleu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:dice-d6-outline"} {...others} />);
}

export default Component;
