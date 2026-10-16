import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x8e-izr_t.css';
import '../../css/f/fxil81qql.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="x8e-izr_t"/><path class="fxil81qql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-pouch-48"} {...others} />);
}

export default Component;
