import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yq7s1mbrn.css';
import '../../css/r/rh8b5jbev.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yq7s1mbrn"/><path class="rh8b5jbev"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:world-heart"} {...others} />);
}

export default Component;
