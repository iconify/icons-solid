import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ap3wsxbft.css';
import '../../css/m/m_kz9zbhm.css';
import '../../css/m/mh6khlbtv.css';
import '../../css/s/s2mq98boy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ap3wsxbft"/><path class="m_kz9zbhm"/><path class="mh6khlbtv"/><path class="s2mq98boy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:pilcrow-left"} {...others} />);
}

export default Component;
