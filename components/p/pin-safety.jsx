import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/da38b_bez.css';
import '../../css/m/ma4nqdb6e.css';
import '../../css/r/rgses48gq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="da38b_bez"/><circle class="ma4nqdb6e"/><path class="rgses48gq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:pin-safety"} {...others} />);
}

export default Component;
