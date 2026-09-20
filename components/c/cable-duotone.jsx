import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e7lqm9obr.css';
import '../../css/v/vfnvfqbwt.css';
import '../../css/w/wsmtlfbzo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="e7lqm9obr"/><path clip-rule="evenodd" class="vfnvfqbwt"/><path class="wsmtlfbzo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cable-duotone"} {...others} />);
}

export default Component;
