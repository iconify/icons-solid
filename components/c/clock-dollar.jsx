import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b2t-tzb3i.css';
import '../../css/l/la40zl-mi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b2t-tzb3i"/><path class="la40zl-mi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:clock-dollar"} {...others} />);
}

export default Component;
