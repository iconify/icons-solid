import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yylsqbcwy.css';
import '../../css/s/s4d7hmlkb.css';
import '../../css/n/nrxfxbcyn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yylsqbcwy"/><path class="s4d7hmlkb"/><path class="nrxfxbcyn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:webhook"} {...others} />);
}

export default Component;
