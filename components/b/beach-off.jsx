import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uy8ra-b7p.css';
import '../../css/a/ajheqhb7l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uy8ra-b7p"/><path class="ajheqhb7l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:beach-off"} {...others} />);
}

export default Component;
