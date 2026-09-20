import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/txnxxrbsu.css';
import '../../css/n/n05myybif.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="txnxxrbsu"/><path clip-rule="evenodd" class="n05myybif"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:thumbs-up-expressive"} {...others} />);
}

export default Component;
