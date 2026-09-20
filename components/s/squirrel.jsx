import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ivagpu9bt.css';
import '../../css/o/omw8bvb0u.css';
import '../../css/p/p_ckcvb-n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ivagpu9bt"/><path class="omw8bvb0u"/><path class="p_ckcvb-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:squirrel"} {...others} />);
}

export default Component;
