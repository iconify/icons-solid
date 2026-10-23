import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o8olbnb2c.css';
import '../../css/p/phh-3ml9n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="o8olbnb2c"/><path class="phh-3ml9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:cloud-lightning"} {...others} />);
}

export default Component;
