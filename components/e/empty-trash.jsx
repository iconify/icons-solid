import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hakimgbod.css';
import '../../css/p/p9b78ab8a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hakimgbod"/><path class="p9b78ab8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:empty-trash"} {...others} />);
}

export default Component;
