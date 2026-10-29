import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/v/vzrb36ytq.css';
import '../../css/l/lds97qcoz.css';
import '../../css/j/jdely0bqz.css';
import '../../css/v/vep726n9i.css';
import '../../css/z/zwnqi2bba.css';
import '../../css/i/ig5i98rhz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="vzrb36ytq wm-shadow"/><path class="lds97qcoz"/><path class="jdely0bqz"/><path class="vep726n9i"/><path class="wm-shine zwnqi2bba"/><path class="ig5i98rhz wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:type"} {...others} />);
}

export default Component;
