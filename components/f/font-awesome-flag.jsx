import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tsm7jgz4d.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="tsm7jgz4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-brands:font-awesome-flag"} {...others} />);
}

export default Component;
