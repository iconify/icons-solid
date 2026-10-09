import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fn0n17h7c.css';
import '../../css/b/b51sehbna.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fn0n17h7c"/><path class="b51sehbna"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:upload-cloud-48"} {...others} />);
}

export default Component;
