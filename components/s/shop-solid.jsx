import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mgk4045dp.css';
import '../../css/e/e26d43smq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="mgk4045dp"/><path class="e26d43smq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:shop-solid"} {...others} />);
}

export default Component;
