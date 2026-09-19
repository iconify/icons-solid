import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wu15qfa1m.css';
import '../../css/j/j0smd1g0j.css';
import '../../css/w/wsm6lx-8z.css';
import '../../css/p/piv5izbzd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wu15qfa1m"/><path class="j0smd1g0j"/><path class="wsm6lx-8z"/><path class="piv5izbzd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency:elix"} {...others} />);
}

export default Component;
