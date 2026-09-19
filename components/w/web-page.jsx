import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/grzcbcbib.css';
import '../../css/b/bad9hsb7u.css';
import '../../css/f/fduciibru.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="grzcbcbib"/><path class="bad9hsb7u"/><circle transform="matrix(0 -1 -1 0 10 14)" class="fduciibru"/><circle transform="matrix(0 -1 -1 0 16 14)" class="fduciibru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:web-page"} {...others} />);
}

export default Component;
