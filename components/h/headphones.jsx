import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yryt5abxb.css';
import '../../css/e/el63bhkyk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yryt5abxb"/><path class="el63bhkyk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:headphones"} {...others} />);
}

export default Component;
