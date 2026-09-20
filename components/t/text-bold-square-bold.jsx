import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kyox24bbn.css';
import '../../css/j/ja2qzrzib.css';
import '../../css/w/wv-8vsbun.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="kyox24bbn"/><path class="ja2qzrzib"/><path clip-rule="evenodd" class="wv-8vsbun"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-bold-square-bold"} {...others} />);
}

export default Component;
