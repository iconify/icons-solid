import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dciw6mb9j.css';
import '../../css/g/gjd67cccr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dciw6mb9j"/><path class="gjd67cccr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:wifi-info-fill"} {...others} />);
}

export default Component;
