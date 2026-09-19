import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tubkdq4xe.css';
import '../../css/c/c-5d9sbei.css';
import '../../css/u/u2q07cbcb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="tubkdq4xe"/><path class="c-5d9sbei"/><circle class="u2q07cbcb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:pigeon"} {...others} />);
}

export default Component;
