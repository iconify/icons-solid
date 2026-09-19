import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m68prj4ad.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m68prj4ad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:beer-mug-empty"} {...others} />);
}

export default Component;
