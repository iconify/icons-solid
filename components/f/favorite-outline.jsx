import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ecm9edcrh.css';

const viewBox = {"width":432,"height":392};
const content = `<path class="ecm9edcrh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:favorite-outline"} {...others} />);
}

export default Component;
