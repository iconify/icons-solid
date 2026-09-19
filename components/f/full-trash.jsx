import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ur-ntnenv.css';
import '../../css/k/kgjor1bvy.css';
import '../../css/h/hakimgbod.css';
import '../../css/p/p9b78ab8a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ur-ntnenv"/><path class="kgjor1bvy"/><path class="hakimgbod"/><path class="p9b78ab8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:full-trash"} {...others} />);
}

export default Component;
