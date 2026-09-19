import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m4aw28bcq.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="m4aw28bcq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:chevron-up-down-20-solid"} {...others} />);
}

export default Component;
