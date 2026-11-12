import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x1i9ffbkm.css';
import '../../css/n/njk4o12yq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x1i9ffbkm"/><path class="njk4o12yq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:shopping-bag-star"} {...others} />);
}

export default Component;
