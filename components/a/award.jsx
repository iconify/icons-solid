import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yoftwf7ei.css';
import '../../css/x/xwo-lz9mf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yoftwf7ei"/><path class="xwo-lz9mf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:award"} {...others} />);
}

export default Component;
