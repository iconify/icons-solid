import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lga-v6l8y.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="lga-v6l8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:patreon-outline"} {...others} />);
}

export default Component;
