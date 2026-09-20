import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ellh8r-1x.css';
import '../../css/o/o39ngecar.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ellh8r-1x"/><path class="o39ngecar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:trophy-two-tone"} {...others} />);
}

export default Component;
