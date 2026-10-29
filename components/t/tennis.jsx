import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/p8cxodbvp.css';
import '../../css/g/gobigfboc.css';
import '../../css/h/h9gtscbqa.css';
import '../../css/j/jam0o8u_t.css';
import '../../css/b/b2h6fgdvb.css';
import '../../css/q/qexfl4bvy.css';
import '../../css/s/sy0cetbpj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="p8cxodbvp wm-shadow"/><path class="gobigfboc"/><path class="h9gtscbqa"/><path class="jam0o8u_t"/><path class="b2h6fgdvb"/><path class="qexfl4bvy wm-shine"/><path class="sy0cetbpj wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:tennis"} {...others} />);
}

export default Component;
