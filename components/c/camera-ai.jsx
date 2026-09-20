import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/thon2yb-t.css';
import '../../css/x/xzwsp87vr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="thon2yb-t"/><path class="xzwsp87vr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:camera-ai"} {...others} />);
}

export default Component;
