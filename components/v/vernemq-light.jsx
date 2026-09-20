import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/anj8b-evo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="anj8b-evo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:vernemq-light"} {...others} />);
}

export default Component;
