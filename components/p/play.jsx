import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/puibmpj5f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="puibmpj5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:play"} {...others} />);
}

export default Component;
