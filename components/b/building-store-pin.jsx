import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y7jmm0agp.css';
import '../../css/j/jikkgq90g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="y7jmm0agp"/><path class="jikkgq90g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:building-store-pin"} {...others} />);
}

export default Component;
