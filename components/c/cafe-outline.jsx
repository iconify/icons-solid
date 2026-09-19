import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0kfxub6a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z0kfxub6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:cafe-outline"} {...others} />);
}

export default Component;
