import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/efcdqybup.css';
import '../../css/a/alpsapn4b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="efcdqybup"/><path class="alpsapn4b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-up-narrow-wide-two-tone"} {...others} />);
}

export default Component;
