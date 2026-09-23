import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sqlthnb9w.css';
import '../../css/i/ibuzkpb7d.css';
import '../../css/n/ntmn62h7t.css';
import '../../css/y/yl66cbb6s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sqlthnb9w"/><path class="ibuzkpb7d"/><path class="ntmn62h7t"/><path class="yl66cbb6s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:audio-lines-sparkles-duotone"} {...others} />);
}

export default Component;
