import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b-877kj4a.css';
import '../../css/e/evefg0bda.css';
import '../../css/s/sj1zo9b8l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b-877kj4a"/><path class="evefg0bda"/><path class="sj1zo9b8l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:gift-sparkles-duotone"} {...others} />);
}

export default Component;
