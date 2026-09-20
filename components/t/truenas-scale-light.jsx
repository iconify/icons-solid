import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c-m8bqbxn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c-m8bqbxn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:truenas-scale-light"} {...others} />);
}

export default Component;
