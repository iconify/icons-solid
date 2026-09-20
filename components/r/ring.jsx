import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/d/dmrb6-bhn.css';
import '../../css/b/bvvgrsbab.css';
import '../../css/q/qv9ol5b9r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="dmrb6-bhn"/><path class="bvvgrsbab"/><path class="qv9ol5b9r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:ring"} {...others} />);
}

export default Component;
