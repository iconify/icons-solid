import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oen2_6b7t.css';
import '../../css/n/nv21e7b0y.css';
import '../../css/a/ao36abnej.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="oen2_6b7t"/><circle class="nv21e7b0y"/><path class="ao36abnej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:forkknife"} {...others} />);
}

export default Component;
