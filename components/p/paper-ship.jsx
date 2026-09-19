import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/s/sgsgpx56o.css';
import '../../css/i/i0b4m805c.css';
import '../../css/f/frazcab9n.css';
import '../../css/f/fgz98zbsr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="sgsgpx56o"/><path class="i0b4m805c"/><path class="frazcab9n"/><path class="fgz98zbsr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:paper-ship"} {...others} />);
}

export default Component;
