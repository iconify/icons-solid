import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s4dm_8boq.css';
import '../../css/s/swzjqgj-x.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="s4dm_8boq"/><circle class="swzjqgj-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:alert-warning-stroke-12"} {...others} />);
}

export default Component;
