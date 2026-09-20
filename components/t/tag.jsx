import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/le5satbnh.css';
import '../../css/k/k9ld4lbnl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="le5satbnh"/><path class="k9ld4lbnl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:tag"} {...others} />);
}

export default Component;
