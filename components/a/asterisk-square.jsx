import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/h/hx1y50bgb.css';
import '../../css/q/qekmy6abq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="hx1y50bgb"/><path class="qekmy6abq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:asterisk-square"} {...others} />);
}

export default Component;
