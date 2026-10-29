import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/d5a51mb0g.css';
import '../../css/s/sytib48xd.css';
import '../../css/u/u3_772bnr.css';
import '../../css/v/v9-50dobk.css';
import '../../css/g/gudez2b2v.css';
import '../../css/f/fqkxsppgc.css';
import '../../css/y/ytv9pib4p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="d5a51mb0g wm-shadow"/><path class="sytib48xd"/><path class="u3_772bnr"/><path class="v9-50dobk"/><path class="gudez2b2v"/><path class="fqkxsppgc wm-shine"/><path class="wm-deco ytv9pib4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:pen-tool"} {...others} />);
}

export default Component;
