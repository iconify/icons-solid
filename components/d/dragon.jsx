import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oz05n205j.css';
import '../../css/u/uloec34qh.css';
import '../../css/f/fbkip6-sb.css';
import '../../css/d/d-xodebre.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="oz05n205j"/><path class="uloec34qh"/><path class="fbkip6-sb"/><path class="d-xodebre"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:dragon"} {...others} />);
}

export default Component;
