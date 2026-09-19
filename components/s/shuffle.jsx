import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/d/dkr0sjjql.css';
import '../../css/y/yg200-boa.css';
import '../../css/o/opakkwbyw.css';
import '../../css/v/v7tbmdb4a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="dkr0sjjql"/><path class="yg200-boa"/><path class="opakkwbyw"/><path class="v7tbmdb4a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:shuffle"} {...others} />);
}

export default Component;
