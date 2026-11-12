import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dzx8rqbxg.css';
import '../../css/q/quscitu3w.css';
import '../../css/i/iv7xugjxy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dzx8rqbxg"/><path class="quscitu3w"/><path class="iv7xugjxy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:heyform"} {...others} />);
}

export default Component;
