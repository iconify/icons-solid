import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mpr1c-b9k.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="mpr1c-b9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:folder-globe"} {...others} />);
}

export default Component;
