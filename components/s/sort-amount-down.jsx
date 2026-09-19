import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_s4ql23r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j_s4ql23r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:sort-amount-down"} {...others} />);
}

export default Component;
