import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8al9ob1t.css';
import '../../css/u/us-05tkac.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n8al9ob1t"/><path class="us-05tkac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ruler-48-bold"} {...others} />);
}

export default Component;
