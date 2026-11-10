import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bl7t7bcab.css';
import '../../css/r/rfq5w3-_l.css';
import '../../css/b/bihh6vetq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bl7t7bcab"/><path class="rfq5w3-_l"/><path class="bihh6vetq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bookmarks"} {...others} />);
}

export default Component;
