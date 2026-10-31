import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/na2ps4b9w.css';
import '../../css/v/vjzc1ab5s.css';
import '../../css/a/awfr-8bnn.css';
import '../../css/f/f3ocs0c_i.css';
import '../../css/s/sy0zdqihx.css';
import '../../css/e/e7b10zbin.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="na2ps4b9w wm-shadow"/><path class="vjzc1ab5s wm-shadow"/><path class="awfr-8bnn"/><path class="f3ocs0c_i"/><path class="sy0zdqihx"/><path class="e7b10zbin"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:volleyball"} {...others} />);
}

export default Component;
