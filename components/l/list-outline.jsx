import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/onx5i2vgi.css';
import '../../css/u/u0ms8pngb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="list-outline"><g class="Vector cuyn6tgcc"><path clip-rule="evenodd" class="onx5i2vgi"/><path class="u0ms8pngb"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:list-outline"} {...others} />);
}

export default Component;
