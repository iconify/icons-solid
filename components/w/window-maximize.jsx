import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o6kie6zvd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o6kie6zvd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:window-maximize"} {...others} />);
}

export default Component;
