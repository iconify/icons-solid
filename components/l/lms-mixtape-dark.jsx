import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qf5ej1owf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qf5ej1owf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:lms-mixtape-dark"} {...others} />);
}

export default Component;
