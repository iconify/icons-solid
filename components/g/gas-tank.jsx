import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufie9ebgy.css';
import '../../css/l/lmzdaxwoj.css';
import '../../css/h/h98i5ybqa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ufie9ebgy"><path clip-rule="evenodd" class="lmzdaxwoj"/><path class="h98i5ybqa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:gas-tank"} {...others} />);
}

export default Component;
