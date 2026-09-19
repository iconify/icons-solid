import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sdma17b5c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sdma17b5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:arrows-alt-h"} {...others} />);
}

export default Component;
