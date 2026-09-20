import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5emytbcu.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="l5emytbcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:watch-table"} {...others} />);
}

export default Component;
