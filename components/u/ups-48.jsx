import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-flw2bql.css';
import '../../css/i/ihgrfnbqw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m-flw2bql"/><path class="ihgrfnbqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ups-48"} {...others} />);
}

export default Component;
