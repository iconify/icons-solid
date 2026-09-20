import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/u/uvopq7b7n.css';
import '../../css/l/l5lxwqaml.css';
import '../../css/l/l_k0w3box.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="uvopq7b7n"/><path class="l5lxwqaml"/><path class="l_k0w3box"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:inbox-post"} {...others} />);
}

export default Component;
