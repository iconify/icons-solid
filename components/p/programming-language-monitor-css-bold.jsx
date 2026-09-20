import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wclz1cc_c.css';
import '../../css/c/czevaumet.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wclz1cc_c"/><path class="czevaumet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:programming-language-monitor-css-bold"} {...others} />);
}

export default Component;
