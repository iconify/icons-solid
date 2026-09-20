import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u6dfp0bwi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u6dfp0bwi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:perspective-off"} {...others} />);
}

export default Component;
