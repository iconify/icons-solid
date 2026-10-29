import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/f7e1mn-nh.css';
import '../../css/h/h6epn6dkz.css';
import '../../css/c/c0tj_tdre.css';
import '../../css/d/dtl29nbhi.css';
import '../../css/y/yn_nn58xi.css';
import '../../css/o/o6d_ph0xo.css';
import '../../css/u/u34wq-b5c.css';
import '../../css/n/n9b-arbvg.css';
import '../../css/a/ac4265bov.css';
import '../../css/c/crwfs5bva.css';
import '../../css/q/qzt7zw_3g.css';
import '../../css/c/ck52n4beh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="f7e1mn-nh wm-shadow"/><path class="h6epn6dkz"/><path class="c0tj_tdre"/><path class="dtl29nbhi"/><path class="yn_nn58xi"/><path class="o6d_ph0xo wm-shine"/><path class="u34wq-b5c wm-s"/><path class="n9b-arbvg wm-s"/><path class="ac4265bov wm-s"/><path class="crwfs5bva wm-shine"/><path class="qzt7zw_3g wm-deco"/><path class="ck52n4beh wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:user-pen"} {...others} />);
}

export default Component;
