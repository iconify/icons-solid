import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hzcyxbagz.css';
import '../../css/z/zk3p-0b1p.css';
import '../../css/f/fhyad2bmg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hzcyxbagz"/><path class="zk3p-0b1p"/><path class="fhyad2bmg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:shield-sparkles-two-tone"} {...others} />);
}

export default Component;
