import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v0ioy2bmf.css';
import '../../css/f/f1_cqti_y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="v0ioy2bmf"/><circle class="f1_cqti_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:map-pin"} {...others} />);
}

export default Component;
