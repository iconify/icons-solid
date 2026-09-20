import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqdsifbjo.css';
import '../../css/v/vvz-ixtom.css';
import '../../css/m/mrjrsknzt.css';
import '../../css/x/x_j1s6rfo.css';
import '../../css/v/vykv10bnv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sqdsifbjo"/><path class="vvz-ixtom"/><path class="mrjrsknzt"/><path class="x_j1s6rfo"/><path class="vykv10bnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-docs"} {...others} />);
}

export default Component;
