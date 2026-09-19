import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gezopnizk.css';
import '../../css/p/plqzk5bjr.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="gezopnizk"/><path class="plqzk5bjr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:paypal"} {...others} />);
}

export default Component;
