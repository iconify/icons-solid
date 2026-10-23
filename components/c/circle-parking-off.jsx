import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sdu126b5g.css';
import '../../css/w/w3vfs9b4h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sdu126b5g"/><path class="w3vfs9b4h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:circle-parking-off"} {...others} />);
}

export default Component;
