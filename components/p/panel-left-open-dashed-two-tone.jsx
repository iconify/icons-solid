import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/ml1zq97yw.css';
import '../../css/y/y0wdx0w6y.css';
import '../../css/p/pndcq9b5c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ml1zq97yw"/><path class="y0wdx0w6y"/><path class="pndcq9b5c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:panel-left-open-dashed-two-tone"} {...others} />);
}

export default Component;
