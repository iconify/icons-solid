import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ivv3pgbdx.css';
import '../../css/a/a4cne2uyj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ivv3pgbdx"/><path class="a4cne2uyj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:bag-hand"} {...others} />);
}

export default Component;
