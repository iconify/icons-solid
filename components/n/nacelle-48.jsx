import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z8tz7uh6r.css';
import '../../css/l/lsbxu7b3y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z8tz7uh6r"/><path class="lsbxu7b3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:nacelle-48"} {...others} />);
}

export default Component;
