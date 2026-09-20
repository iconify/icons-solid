import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/chnkfjcmo.css';
import '../../css/i/i0oh48bvd.css';
import '../../css/z/ztqbc2bvy.css';
import '../../css/q/qwbzpw7eu.css';
import '../../css/z/z67xytbre.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="chnkfjcmo"/><path class="i0oh48bvd"/><path class="ztqbc2bvy"/><path class="qwbzpw7eu"/><path class="z67xytbre"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:printer-3"} {...others} />);
}

export default Component;
