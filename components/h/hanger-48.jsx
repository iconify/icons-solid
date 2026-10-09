import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m3wq640fi.css';
import '../../css/x/x59ggbc2f.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m3wq640fi"/><path class="x59ggbc2f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hanger-48"} {...others} />);
}

export default Component;
