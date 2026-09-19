import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukooq9bkv.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="ukooq9bkv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:waning-crescent-moon-symbol"} {...others} />);
}

export default Component;
