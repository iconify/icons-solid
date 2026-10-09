import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gihw2lrko.css';
import '../../css/b/brlnqubgb.css';
import '../../css/o/ougbzrbsg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gihw2lrko"/><path class="brlnqubgb"/><path class="ougbzrbsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:meeting-20-bold"} {...others} />);
}

export default Component;
