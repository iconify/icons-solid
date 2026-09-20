import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cjk21-bdt.css';
import '../../css/r/rk7x5c74b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cjk21-bdt"/><path class="rk7x5c74b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:pentagon-number-9"} {...others} />);
}

export default Component;
