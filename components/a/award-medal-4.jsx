import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vsg6s8k0c.css';
import '../../css/s/szk1d5uij.css';
import '../../css/f/f3gmhjb0f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="vsg6s8k0c"/><path class="szk1d5uij"/><path class="f3gmhjb0f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:award-medal-4"} {...others} />);
}

export default Component;
