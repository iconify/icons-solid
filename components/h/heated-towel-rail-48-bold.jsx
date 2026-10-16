import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pbuh36b3k.css';
import '../../css/y/yvatoebpm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pbuh36b3k"/><path class="yvatoebpm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heated-towel-rail-48-bold"} {...others} />);
}

export default Component;
