import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hya9gcbdz.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i_dg2gbxb.css';
import '../../css/n/npnurpite.css';
import '../../css/u/umcmaccis.css';
import '../../css/x/x-32_ypxg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hya9gcbdz secondary"/><g class="dt0cm9dhy primary"><path class="i_dg2gbxb"/><path class="npnurpite"/><path class="umcmaccis"/><path class="x-32_ypxg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:bookshelf-duo"} {...others} />);
}

export default Component;
