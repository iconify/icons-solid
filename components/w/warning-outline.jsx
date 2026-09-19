import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/suxwajh7t.css';
import '../../css/h/hky_roj3c.css';
import '../../css/u/ur91l0baa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="warning-outline"><g class="Vector cuyn6tgcc"><path clip-rule="evenodd" class="suxwajh7t"/><path class="hky_roj3c"/><path clip-rule="evenodd" class="ur91l0baa"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:warning-outline"} {...others} />);
}

export default Component;
