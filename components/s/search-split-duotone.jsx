import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lznnucceq.css';
import '../../css/m/muuvzwbbg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lznnucceq"/><path class="muuvzwbbg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:search-split-duotone"} {...others} />);
}

export default Component;
