import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s3e43eb-h.css';
import '../../css/n/n26x25bpl.css';
import '../../css/h/h1a-_zb3n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s3e43eb-h"/><path class="n26x25bpl"/><path class="h1a-_zb3n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:tablet-arrow-left-duotone"} {...others} />);
}

export default Component;
