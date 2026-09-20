import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l8wxdq4kw.css';
import '../../css/s/sod9sobby.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="l8wxdq4kw"/><path class="sod9sobby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:toast"} {...others} />);
}

export default Component;
