import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l-quodbjv.css';
import '../../css/x/xlylm3b2y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="l-quodbjv"/><path class="xlylm3b2y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:git-return-two-tone"} {...others} />);
}

export default Component;
