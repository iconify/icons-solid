import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jik0uqbax.css';
import '../../css/r/rshns2aav.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jik0uqbax"/><path clip-rule="evenodd" class="rshns2aav"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-upload-bold"} {...others} />);
}

export default Component;
