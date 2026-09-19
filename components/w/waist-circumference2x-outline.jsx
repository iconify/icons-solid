import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fedk4wb9a.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="fedk4wb9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:waist-circumference2x-outline"} {...others} />);
}

export default Component;
