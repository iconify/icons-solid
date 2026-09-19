import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ufpp1dblg.css';
import '../../css/o/orq9p0bfg.css';
import '../../css/w/wp7vq6b7w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ufpp1dblg"/><path class="orq9p0bfg"/><path class="wp7vq6b7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:focus-one"} {...others} />);
}

export default Component;
