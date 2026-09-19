import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w35c-da3k.css';
import '../../css/w/wnocnbc7k.css';
import '../../css/f/fvlkw7bxe.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="w35c-da3k"/><path class="wnocnbc7k"/><path class="fvlkw7bxe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:edit-movie"} {...others} />);
}

export default Component;
