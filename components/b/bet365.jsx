import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/biywueb9y.css';
import '../../css/n/nic2oihrm.css';
import '../../css/c/cga1y9b8q.css';
import '../../css/f/fr_4vlbpo.css';
import '../../css/e/eqdsspleo.css';

const viewBox = {"width":100,"height":51.195};
const content = `<path class="biywueb9y"/><path class="nic2oihrm"/><path class="cga1y9b8q"/><path class="fr_4vlbpo"/><path class="eqdsspleo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:bet365"} {...others} />);
}

export default Component;
