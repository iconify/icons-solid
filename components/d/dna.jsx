import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/s/sjrg0j4gt.css';
import '../../css/w/w3v9lfb2p.css';
import '../../css/h/hne6pl5nm.css';
import '../../css/v/v47gsrbdd.css';
import '../../css/r/rjas32bmi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="sjrg0j4gt wm-shadow"/><path class="w3v9lfb2p"/><path class="hne6pl5nm"/><path class="v47gsrbdd"/><path class="rjas32bmi wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:dna"} {...others} />);
}

export default Component;
