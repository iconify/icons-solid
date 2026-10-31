import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sl6_gqb3z.css';
import '../../css/g/gp7pkqbnv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sl6_gqb3z"/><path class="gp7pkqbnv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:ask"} {...others} />);
}

export default Component;
