import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f599r80rj.css';
import '../../css/b/bk-69btoc.css';
import '../../css/w/w-7jn-qfw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="f599r80rj"/><path class="bk-69btoc"/><path clip-rule="evenodd" class="w-7jn-qfw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:radio-expressive"} {...others} />);
}

export default Component;
