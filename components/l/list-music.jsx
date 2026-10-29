import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/q9zcwsr4m.css';
import '../../css/m/md64bd22e.css';
import '../../css/z/z33cxduml.css';
import '../../css/p/pbsfmfbyu.css';
import '../../css/f/faa0q1pay.css';
import '../../css/d/d-iukhzke.css';
import '../../css/h/ho1yev95w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="q9zcwsr4m wm-shadow"/><path class="md64bd22e"/><path class="z33cxduml"/><path class="pbsfmfbyu"/><path class="faa0q1pay"/><path class="d-iukhzke"/><path class="ho1yev95w wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:list-music"} {...others} />);
}

export default Component;
