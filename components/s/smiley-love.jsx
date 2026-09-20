import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a7hm2xayt.css';
import '../../css/a/a8wnn-nak.css';
import '../../css/h/h19c08bjb.css';
import '../../css/a/a-ybx00aj.css';
import '../../css/j/jv3vgebal.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a7hm2xayt"/><path class="a8wnn-nak"/><path class="h19c08bjb"/><path class="a-ybx00aj"/><path class="jv3vgebal"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:smiley-love"} {...others} />);
}

export default Component;
