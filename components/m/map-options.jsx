import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ebt0b4bjw.css';
import '../../css/j/jpgdedcax.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="ebt0b4bjw"/><path class="jpgdedcax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:map-options"} {...others} />);
}

export default Component;
