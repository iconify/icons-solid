import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/e/evq3lubsj.css';
import '../../css/i/ivhse19bz.css';
import '../../css/y/y9q43ibal.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="evq3lubsj"/><path class="ivhse19bz"/><path class="y9q43ibal"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:repeat3"} {...others} />);
}

export default Component;
