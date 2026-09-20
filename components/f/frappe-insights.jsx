import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b9n1396-x.css';
import '../../css/g/g-e3hmm2f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b9n1396-x"/><path class="g-e3hmm2f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:frappe-insights"} {...others} />);
}

export default Component;
