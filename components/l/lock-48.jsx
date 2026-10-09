import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q6deh2baw.css';
import '../../css/l/lc3h535iw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="q6deh2baw"/><path class="lc3h535iw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lock-48"} {...others} />);
}

export default Component;
