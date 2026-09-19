import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/v/vjzosvb-h.css';
import '../../css/e/etfs49m8c.css';
import '../../css/u/u7mfixf6h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><rect transform="rotate(180 38 30)" class="vjzosvb-h"/><path class="etfs49m8c"/><path class="u7mfixf6h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:distribute-vertically"} {...others} />);
}

export default Component;
