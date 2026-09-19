import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wegdsqxjp.css';
import '../../css/r/r9y0yfbrb.css';
import '../../css/b/b3kgo03hw.css';
import '../../css/c/c2rcj8lti.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="wegdsqxjp"/><path class="r9y0yfbrb"/><path class="b3kgo03hw"/><path class="c2rcj8lti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:social-distancing-1"} {...others} />);
}

export default Component;
