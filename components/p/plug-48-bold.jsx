import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6rccpbxu.css';
import '../../css/j/jh8uq2e7m.css';
import '../../css/n/nl2f48bzi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z6rccpbxu"/><path class="jh8uq2e7m"/><path class="nl2f48bzi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:plug-48-bold"} {...others} />);
}

export default Component;
