import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v56497vdz.css';
import '../../css/p/pyfdgjupn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="v56497vdz"/><path class="pyfdgjupn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:down-right"} {...others} />);
}

export default Component;
