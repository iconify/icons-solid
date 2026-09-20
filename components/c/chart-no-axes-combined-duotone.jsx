import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b24wgm90r.css';
import '../../css/f/fm703rmtm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b24wgm90r"/><path class="fm703rmtm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chart-no-axes-combined-duotone"} {...others} />);
}

export default Component;
