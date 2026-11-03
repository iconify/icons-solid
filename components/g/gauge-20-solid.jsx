import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rv5akjb7s.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="rv5akjb7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:gauge-20-solid"} {...others} />);
}

export default Component;
