import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fg24un7vw.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="fg24un7vw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:small-plane-outline"} {...others} />);
}

export default Component;
