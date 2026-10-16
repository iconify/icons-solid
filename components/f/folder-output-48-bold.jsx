import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/if165db6l.css';
import '../../css/j/jo5-atb-z.css';
import '../../css/n/no5uchbkp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="if165db6l"/><path class="jo5-atb-z"/><path class="no5uchbkp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:folder-output-48-bold"} {...others} />);
}

export default Component;
