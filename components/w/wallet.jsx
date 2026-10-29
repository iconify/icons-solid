import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/jl7dhzbxn.css';
import '../../css/y/y82xv19te.css';
import '../../css/s/snbmf7blt.css';
import '../../css/z/z4335gbpb.css';
import '../../css/b/bg9e6sbjo.css';
import '../../css/h/hw0l3b_4d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="jl7dhzbxn wm-shadow"/><path class="y82xv19te"/><path class="snbmf7blt"/><path class="z4335gbpb"/><path class="bg9e6sbjo wm-shine"/><path class="hw0l3b_4d wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:wallet"} {...others} />);
}

export default Component;
