import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/l7y3mobci.css';
import '../../css/v/vew-iwbqo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="l7y3mobci"/><path class="vew-iwbqo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:bug-virus-browser"} {...others} />);
}

export default Component;
