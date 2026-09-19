import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x-cz3x_bu.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="x-cz3x_bu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:dolly"} {...others} />);
}

export default Component;
