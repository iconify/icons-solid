import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nz42wcbby.css';
import '../../css/d/d75cv_bws.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="nz42wcbby"/><path class="d75cv_bws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:pasl"} {...others} />);
}

export default Component;
