import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/de3fnpb6z.css';
import '../../css/u/ue-felo6c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="de3fnpb6z"/><path class="ue-felo6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:girl-two-tone"} {...others} />);
}

export default Component;
