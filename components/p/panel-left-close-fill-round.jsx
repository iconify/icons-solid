import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mw_p5en_g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mw_p5en_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:panel-left-close-fill-round"} {...others} />);
}

export default Component;
