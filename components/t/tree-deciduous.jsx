import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/yi1vn8gld.css';
import '../../css/g/gqufqsxub.css';
import '../../css/n/n9abnpbmc.css';
import '../../css/i/ijcv4x68c.css';
import '../../css/e/eu0vxpb2c.css';
import '../../css/x/xkzbfq_8i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow yi1vn8gld"/><path class="gqufqsxub"/><path class="n9abnpbmc"/><path class="ijcv4x68c"/><path class="eu0vxpb2c wm-shine"/><path class="wm-deco xkzbfq_8i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:tree-deciduous"} {...others} />);
}

export default Component;
