import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/poo62ovlz.css';
import '../../css/j/jwn4f8bbo.css';
import '../../css/n/nnjt6sbyf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="poo62ovlz"/><path class="jwn4f8bbo"/><path class="nnjt6sbyf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:rocket"} {...others} />);
}

export default Component;
