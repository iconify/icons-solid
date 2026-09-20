import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w1_jmk1cr.css';
import '../../css/f/f3kmjcc1w.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="w1_jmk1cr"/><path class="f3kmjcc1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:toggle-on"} {...others} />);
}

export default Component;
