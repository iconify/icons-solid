import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y8e_6ke2r.css';
import '../../css/w/whh36mqqr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="y8e_6ke2r"/><path class="whh36mqqr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:jetski"} {...others} />);
}

export default Component;
