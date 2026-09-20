import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u2fthmbna.css';
import '../../css/e/eraiu__rv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u2fthmbna"/><path class="eraiu__rv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:clouds-two-tone"} {...others} />);
}

export default Component;
