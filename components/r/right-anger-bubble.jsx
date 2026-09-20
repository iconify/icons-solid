import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/h/h6u3qrorb.css';
import '../../css/l/l36f9pfhl.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/d/dnqep7btc.css';
import '../../css/w/wy1oeubfr.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="n1mjunbsu"><path class="h6u3qrorb"/><path class="l36f9pfhl"/></g><g class="rpvb-o6bq"><path class="dnqep7btc"/><path class="wy1oeubfr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:right-anger-bubble"} {...others} />);
}

export default Component;
