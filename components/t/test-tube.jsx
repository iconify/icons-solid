import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bu-u2ebah.css';
import '../../css/h/hlrq6c2ew.css';
import '../../css/f/fb921obvg.css';
import '../../css/f/fh4k-wbtv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="bu-u2ebah"/><path class="hlrq6c2ew"/><path class="fb921obvg"/><path class="fh4k-wbtv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:test-tube"} {...others} />);
}

export default Component;
