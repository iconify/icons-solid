import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p_ieiz18n.css';
import '../../css/d/d5xclqbor.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p_ieiz18n"/><path class="d5xclqbor"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:syncloud"} {...others} />);
}

export default Component;
