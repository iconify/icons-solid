import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/v549y8b8w.css';
import '../../css/s/sgm2p807k.css';
import '../../css/g/g1em6hxjd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="v549y8b8w"/><path class="sgm2p807k"/><path class="g1em6hxjd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:dog-zodiac"} {...others} />);
}

export default Component;
