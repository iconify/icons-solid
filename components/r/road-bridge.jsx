import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nj9vw7x9f.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="nj9vw7x9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:road-bridge"} {...others} />);
}

export default Component;
