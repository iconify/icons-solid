import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/walbv2b5n.css';
import '../../css/b/briez7-4n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="walbv2b5n"/><path class="briez7-4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:heading-2-two-tone"} {...others} />);
}

export default Component;
