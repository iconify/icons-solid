import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qzcyntb8z.css';
import '../../css/x/x7x-jkbhl.css';
import '../../css/b/b0o28ve4x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qzcyntb8z"/><path class="x7x-jkbhl"/><path class="b0o28ve4x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-fork-triple"} {...others} />);
}

export default Component;
