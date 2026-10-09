import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bybnubbfi.css';
import '../../css/b/bc05qzspk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bybnubbfi"/><path class="bc05qzspk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:capacitor-48"} {...others} />);
}

export default Component;
