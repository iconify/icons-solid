import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zcqbabccs.css';
import '../../css/d/dgwj8cbvh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zcqbabccs"/><path class="dgwj8cbvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nanote"} {...others} />);
}

export default Component;
