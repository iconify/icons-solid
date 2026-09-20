import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xcr6spbwb.css';
import '../../css/r/rpayzwb9i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xcr6spbwb"/><path class="rpayzwb9i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:folder-plus-duotone"} {...others} />);
}

export default Component;
