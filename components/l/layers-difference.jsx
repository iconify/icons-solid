import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v9c-14bbe.css';
import '../../css/h/h58mmjb6r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="v9c-14bbe"/><path class="h58mmjb6r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:layers-difference"} {...others} />);
}

export default Component;
