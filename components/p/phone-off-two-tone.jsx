import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xldle2bgc.css';
import '../../css/e/e9mpndb4a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xldle2bgc"/><path class="e9mpndb4a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:phone-off-two-tone"} {...others} />);
}

export default Component;
