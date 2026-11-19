import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/levjh9b6m.css';
import '../../css/x/x5bhhcb4p.css';
import '../../css/s/s3bm4ibrd.css';
import '../../css/z/zmwqzbplb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="levjh9b6m"/><path class="x5bhhcb4p"/><path class="s3bm4ibrd"/><path class="zmwqzbplb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cassette-tape"} {...others} />);
}

export default Component;
