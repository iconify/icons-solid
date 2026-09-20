import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dmz6lfbta.css';
import '../../css/f/flvnzbt7i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dmz6lfbta"/><path class="flvnzbt7i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-waze"} {...others} />);
}

export default Component;
