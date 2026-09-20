import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jgnjtlc0k.css';
import '../../css/b/bew41nbzz.css';
import '../../css/w/w7m08bbop.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jgnjtlc0k"/><path class="bew41nbzz"/><path class="w7m08bbop"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:home-link"} {...others} />);
}

export default Component;
