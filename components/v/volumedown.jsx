import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l4gk5-dnq.css';

const viewBox = {"width":16,"height":13};
const content = `<path class="l4gk5-dnq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:volumedown"} {...others} />);
}

export default Component;
