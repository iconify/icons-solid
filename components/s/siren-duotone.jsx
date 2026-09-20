import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y7sqe_bvd.css';
import '../../css/z/zusgepdhq.css';
import '../../css/g/gjyn-2b-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="y7sqe_bvd"/><path clip-rule="evenodd" class="zusgepdhq"/><path class="gjyn-2b-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:siren-duotone"} {...others} />);
}

export default Component;
