import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9kli0b2o.css';
import '../../css/f/fr0jglbrv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s9kli0b2o"/><path class="fr0jglbrv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:storage-heater-20"} {...others} />);
}

export default Component;
