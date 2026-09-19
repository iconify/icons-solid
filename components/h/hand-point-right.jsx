import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ax7kk0bmy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ax7kk0bmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-regular:hand-point-right"} {...others} />);
}

export default Component;
