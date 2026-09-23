import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v1_-mmy7d.css';
import '../../css/m/mnv0b0b0w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="v1_-mmy7d"/><path class="mnv0b0b0w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:search-2-sparkles"} {...others} />);
}

export default Component;
