import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_2gbubii.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/mfz0kt2fu.css';
import '../../css/x/xbexg2bxe.css';
import '../../css/b/blxea3bhy.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ib12mdbzg.css';
import '../../css/a/at5uggp4m.css';
import '../../css/y/yjtyiabti.css';
import '../../css/i/izcwmac9d.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGO1dvqd4W" class="s_2gbubii"/></defs><g class="t_2lkqbxb"><path class="mfz0kt2fu wm-shadow"/><path class="xbexg2bxe"/><path class="blxea3bhy"/><use href="#SVGO1dvqd4W" class="d2kvgvbvc"/><path class="ib12mdbzg"/><use href="#SVGO1dvqd4W" class="d2kvgvbvc"/><path class="at5uggp4m"/><path class="yjtyiabti"/><path class="izcwmac9d wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:monitor"} {...others} />);
}

export default Component;
