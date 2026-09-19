import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/v/v5ahe0b8s.css';
import '../../css/w/w_2kuaciz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path clip-rule="evenodd" class="v5ahe0b8s"/><path class="w_2kuaciz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:water-level"} {...others} />);
}

export default Component;
