import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xvlx87bnz.css';
import '../../css/e/eud0165so.css';
import '../../css/b/bpxdh911r.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="xvlx87bnz"/><path class="eud0165so"/><path class="bpxdh911r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:leetcode"} {...others} />);
}

export default Component;
