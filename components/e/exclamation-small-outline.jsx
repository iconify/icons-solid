import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uau_mgktq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="uau_mgktq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:exclamation-small-outline"} {...others} />);
}

export default Component;
