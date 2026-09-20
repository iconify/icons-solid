import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u3cao43jn.css';
import '../../css/f/f13cyk52i.css';
import '../../css/s/smok2x2qy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="u3cao43jn"/><path clip-rule="evenodd" class="f13cyk52i"/><path class="smok2x2qy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:inbox-post-solid"} {...others} />);
}

export default Component;
