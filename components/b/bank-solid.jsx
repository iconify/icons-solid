import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqglnrb0z.css';
import '../../css/s/s6o6votsb.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="wqglnrb0z"/><path clip-rule="evenodd" class="s6o6votsb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:bank-solid"} {...others} />);
}

export default Component;
