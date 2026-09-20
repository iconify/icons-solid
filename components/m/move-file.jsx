import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/s7o9jrbzn.css';
import '../../css/d/dvwhmxnov.css';
import '../../css/a/a_0cnlboy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="s7o9jrbzn"/><path class="dvwhmxnov"/><path class="a_0cnlboy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:move-file"} {...others} />);
}

export default Component;
