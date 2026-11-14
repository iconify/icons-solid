import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nhefkhh7c.css';
import '../../css/v/v6my4yeca.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nhefkhh7c"/><path class="v6my4yeca"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:heart"} {...others} />);
}

export default Component;
