import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/gznbihb4n.css';
import '../../css/s/smqqt0n0e.css';
import '../../css/p/pcjcjycvu.css';
import '../../css/s/spjjyyb5j.css';
import '../../css/g/gwj9cqgka.css';
import '../../css/a/aexe23bqk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="gznbihb4n wm-shadow"/><path class="smqqt0n0e"/><path class="pcjcjycvu"/><path class="spjjyyb5j"/><path class="gwj9cqgka wm-shine"/><path class="aexe23bqk wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:repeat"} {...others} />);
}

export default Component;
