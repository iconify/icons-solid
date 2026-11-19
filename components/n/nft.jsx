import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h_pvslxaf.css';
import '../../css/d/dgr-e3beh.css';
import '../../css/e/etzg9qb3e.css';
import '../../css/r/r1lhcdgyc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h_pvslxaf"/><path class="dgr-e3beh"/><path class="etzg9qb3e"/><path class="r1lhcdgyc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:nft"} {...others} />);
}

export default Component;
