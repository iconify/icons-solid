import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j2e390d8t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j2e390d8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:chart-trend-down-duotone"} {...others} />);
}

export default Component;
