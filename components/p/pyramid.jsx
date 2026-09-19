import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/l/lyejctb-k.css';
import '../../css/p/p1ss20z1i.css';
import '../../css/o/o-2qktdxl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path clip-rule="evenodd" class="lyejctb-k"/><path class="p1ss20z1i"/><path class="o-2qktdxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:pyramid"} {...others} />);
}

export default Component;
