import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iu-_06bfk.css';
import '../../css/q/qzu5cgzuy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="iu-_06bfk"/><path class="qzu5cgzuy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:nodule-48"} {...others} />);
}

export default Component;
