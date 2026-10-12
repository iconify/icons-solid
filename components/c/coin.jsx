import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gjehjfbxn.css';
import '../../css/j/jfuyabcyh.css';
import '../../css/s/s2ll1nrng.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gjehjfbxn"/><ellipse transform="rotate(90 10.07 12)" class="jfuyabcyh"/><path class="s2ll1nrng"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:coin"} {...others} />);
}

export default Component;
