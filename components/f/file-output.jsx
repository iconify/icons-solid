import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nuk5oq32p.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/z/zokl8lbbg.css';
import '../../css/j/jbtnp_siq.css';
import '../../css/q/qg3drwbek.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jz8jovbby.css';
import '../../css/p/p2qwmgddn.css';
import '../../css/x/x32n-j49l.css';
import '../../css/o/omg7y-bfp.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGOTJLDeWT" class="nuk5oq32p"/></defs><g class="t_2lkqbxb"><path class="wm-shadow zokl8lbbg"/><path class="jbtnp_siq"/><path class="qg3drwbek"/><use href="#SVGOTJLDeWT" class="d2kvgvbvc"/><path class="jz8jovbby"/><use href="#SVGOTJLDeWT" class="d2kvgvbvc"/><path class="p2qwmgddn"/><path class="wm-shine x32n-j49l"/><path class="omg7y-bfp wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:file-output"} {...others} />);
}

export default Component;
