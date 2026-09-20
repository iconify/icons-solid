import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/e/e7ct-sb-h.css';
import '../../css/s/sy-i5_08x.css';
import '../../css/g/g0im4qb3w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="e7ct-sb-h"/><path class="sy-i5_08x"/><path class="g0im4qb3w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:google-near-by-logo"} {...others} />);
}

export default Component;
