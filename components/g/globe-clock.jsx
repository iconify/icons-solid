import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/frd8jk2_u.css';
import '../../css/i/igpa2gbno.css';
import '../../css/c/c_63rybwj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="frd8jk2_u"/><path class="igpa2gbno"/><circle class="c_63rybwj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:globe-clock"} {...others} />);
}

export default Component;
