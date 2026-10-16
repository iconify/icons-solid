import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ev392zb0m.css';
import '../../css/i/iusq5pwib.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ev392zb0m"/><path class="iusq5pwib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:nozzle-20-bold"} {...others} />);
}

export default Component;
