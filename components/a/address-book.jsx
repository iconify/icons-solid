import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mkmmjsq7w.css';
import '../../css/v/vsl3hzbif.css';
import '../../css/d/dt2ucwblp.css';
import '../../css/u/u9chh6_lz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mkmmjsq7w"/><path class="vsl3hzbif"/><path class="dt2ucwblp"/><path class="u9chh6_lz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:address-book"} {...others} />);
}

export default Component;
