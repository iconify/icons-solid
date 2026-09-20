import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hvo2u5b9u.css';
import '../../css/h/hbukzofay.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hvo2u5b9u"/><path class="hbukzofay"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:book-upload"} {...others} />);
}

export default Component;
