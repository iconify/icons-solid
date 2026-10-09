import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d1iv3qhdn.css';
import '../../css/d/de1hnzbwb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="d1iv3qhdn"/><path class="de1hnzbwb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:microgrid-48"} {...others} />);
}

export default Component;
