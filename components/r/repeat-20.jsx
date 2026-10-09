import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m8dyr0iia.css';
import '../../css/m/m1hyp0bms.css';
import '../../css/c/c02oijjub.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m8dyr0iia"/><path class="m1hyp0bms"/><path class="c02oijjub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:repeat-20"} {...others} />);
}

export default Component;
