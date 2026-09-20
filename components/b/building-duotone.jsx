import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b84h-bczg.css';
import '../../css/n/nyxz4-pih.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b84h-bczg"/><path class="nyxz4-pih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:building-duotone"} {...others} />);
}

export default Component;
