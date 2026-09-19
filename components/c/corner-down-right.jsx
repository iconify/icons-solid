import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uc76hgb4j.css';
import '../../css/x/x_sizeyma.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uc76hgb4j"/><path class="x_sizeyma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:corner-down-right"} {...others} />);
}

export default Component;
