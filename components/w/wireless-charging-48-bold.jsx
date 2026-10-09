import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ibs8b-b6s.css';
import '../../css/r/rh7lscyqa.css';
import '../../css/y/y6m516bwj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ibs8b-b6s"/><path class="rh7lscyqa"/><path class="y6m516bwj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wireless-charging-48-bold"} {...others} />);
}

export default Component;
