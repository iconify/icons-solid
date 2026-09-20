import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yzn_a0f7z.css';
import '../../css/s/s9h2h31km.css';
import '../../css/r/rd46urbeh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="yzn_a0f7z"/><path class="s9h2h31km"/><path class="rd46urbeh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:hair-skin"} {...others} />);
}

export default Component;
