import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qdx3nache.css';
import '../../css/g/gti5-7bfi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qdx3nache"/><path class="gti5-7bfi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:sort-descending-numbers"} {...others} />);
}

export default Component;
