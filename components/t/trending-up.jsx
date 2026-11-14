import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wvxdzs2cd.css';
import '../../css/u/upu8ebcyp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wvxdzs2cd"/><path class="upu8ebcyp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:trending-up"} {...others} />);
}

export default Component;
