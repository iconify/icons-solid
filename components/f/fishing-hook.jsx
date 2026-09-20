import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pj9n4rb5r.css';
import '../../css/n/ndu6_mbpi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pj9n4rb5r"/><circle class="ndu6_mbpi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:fishing-hook"} {...others} />);
}

export default Component;
