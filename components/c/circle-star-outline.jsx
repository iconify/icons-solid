import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/n/nnc71dbsl.css';
import '../../css/i/imnimkbei.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="h01tyzbfu"><path class="nnc71dbsl"/><path class="imnimkbei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:circle-star-outline"} {...others} />);
}

export default Component;
