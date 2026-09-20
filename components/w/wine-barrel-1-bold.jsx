import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9nbipb_i.css';
import '../../css/v/vw1ziqbrv.css';
import '../../css/i/izh8f-hbs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n9nbipb_i"/><path class="vw1ziqbrv"/><path class="izh8f-hbs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:wine-barrel-1-bold"} {...others} />);
}

export default Component;
