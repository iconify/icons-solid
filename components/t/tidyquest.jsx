import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5twlibpq.css';
import '../../css/d/dkab58b3o.css';
import '../../css/z/zn725acau.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x5twlibpq"/><path class="dkab58b3o"/><path class="zn725acau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tidyquest"} {...others} />);
}

export default Component;
