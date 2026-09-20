import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cc50cvs0o.css';
import '../../css/n/nk5pr_b_i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cc50cvs0o"/><path class="nk5pr_b_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:dice-6"} {...others} />);
}

export default Component;
