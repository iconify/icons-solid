import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o6kj1gvby.css';
import '../../css/h/hn7lp_bzn.css';
import '../../css/n/n6w939bna.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="o6kj1gvby"/><path class="hn7lp_bzn"/><path class="n6w939bna"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:photo-bolt"} {...others} />);
}

export default Component;
