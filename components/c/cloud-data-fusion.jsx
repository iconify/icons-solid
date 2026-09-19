import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wdk57lw0q.css';
import '../../css/l/lnokh_j4l.css';
import '../../css/v/vjh29ff2i.css';
import '../../css/p/pg2hytb_n.css';
import '../../css/o/ozejrfben.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wdk57lw0q"/><path class="lnokh_j4l"/><path class="vjh29ff2i"/><path class="pg2hytb_n"/><path class="ozejrfben"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-data-fusion"} {...others} />);
}

export default Component;
