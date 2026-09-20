import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydzbdhtcp.css';
import '../../css/e/e5c90cc_n.css';
import '../../css/q/q_4suiuce.css';
import '../../css/x/xhh1_acdd.css';

const viewBox = {"width":333.22,"height":333.22};
const content = `<path class="ydzbdhtcp"/><path class="e5c90cc_n"/><path class="q_4suiuce"/><path class="xhh1_acdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:dominos-light"} {...others} />);
}

export default Component;
