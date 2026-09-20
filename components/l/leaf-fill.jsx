import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iztvuabne.css';
import '../../css/o/om310-6ti.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="iztvuabne"/><path class="om310-6ti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:leaf-fill"} {...others} />);
}

export default Component;
