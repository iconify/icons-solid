import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/id5hbu2ge.css';

const viewBox = {"width":304,"height":496};
const content = `<path class="id5hbu2ge"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:bubble"} {...others} />);
}

export default Component;
