import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p0in47oqi.css';
import '../../css/a/apxndybzv.css';
import '../../css/c/ceww6gbiz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p0in47oqi"/><path class="apxndybzv"/><path class="ceww6gbiz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:variable-minus"} {...others} />);
}

export default Component;
