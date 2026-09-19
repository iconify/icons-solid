import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/if33zkffk.css';
import '../../css/f/fa0fk2bvn.css';
import '../../css/g/g7c7tpvnn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="if33zkffk"/><path class="fa0fk2bvn"/><path class="g7c7tpvnn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:tablet-android"} {...others} />);
}

export default Component;
