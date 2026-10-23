import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/shtj7249c.css';
import '../../css/c/c_9t11wpq.css';
import '../../css/b/bf-n60imn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="shtj7249c"/><path class="c_9t11wpq"/><path class="bf-n60imn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:escalator-up"} {...others} />);
}

export default Component;
