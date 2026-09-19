import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/h/h9swcnbvp.css';
import '../../css/n/nrodidd9m.css';
import '../../css/o/osaqrz5kl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="h9swcnbvp"/><path class="nrodidd9m"/><path class="osaqrz5kl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:afferent"} {...others} />);
}

export default Component;
