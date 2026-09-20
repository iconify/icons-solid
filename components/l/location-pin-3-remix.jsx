import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kbpt-4e8d.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="kbpt-4e8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:location-pin-3-remix"} {...others} />);
}

export default Component;
