import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f_1kiub1c.css';
import '../../css/m/ma4wo4b-c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="f_1kiub1c"/><path class="ma4wo4b-c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:briefcase"} {...others} />);
}

export default Component;
