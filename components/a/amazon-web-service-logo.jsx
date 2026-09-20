import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/v/v9eouhbst.css';
import '../../css/u/ut0t_4bgw.css';
import '../../css/d/de_dl_ben.css';
import '../../css/h/ht4368bth.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="v9eouhbst"/><path class="ut0t_4bgw"/><path class="de_dl_ben"/><path class="ht4368bth"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:amazon-web-service-logo"} {...others} />);
}

export default Component;
