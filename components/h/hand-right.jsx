import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/c/chuh-hwdr.css';
import '../../css/m/m9pmmxb5d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="chuh-hwdr"/><path clip-rule="evenodd" class="m9pmmxb5d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:hand-right"} {...others} />);
}

export default Component;
