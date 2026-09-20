import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pj7jzqbuj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pj7jzqbuj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:jellyswarrm-light"} {...others} />);
}

export default Component;
