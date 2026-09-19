import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2m-lcscl.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="k2m-lcscl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:layer-add-o"} {...others} />);
}

export default Component;
