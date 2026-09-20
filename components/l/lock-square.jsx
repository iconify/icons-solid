import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l1g8ht9pf.css';
import '../../css/p/pi8645b3h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="l1g8ht9pf"/><path class="pi8645b3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:lock-square"} {...others} />);
}

export default Component;
