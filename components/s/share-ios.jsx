import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e8vs1tblt.css';
import '../../css/z/zi7afo3ec.css';
import '../../css/p/pbuz9tema.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="e8vs1tblt"/><path class="zi7afo3ec"/><path class="pbuz9tema"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:share-ios"} {...others} />);
}

export default Component;
