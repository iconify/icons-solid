import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/o/ou29h-bjq.css';
import '../../css/h/hsmgu8r4l.css';
import '../../css/c/cyfkkj1ox.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><rect class="ou29h-bjq"/><ellipse class="hsmgu8r4l"/><path class="cyfkkj1ox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:pumpkin"} {...others} />);
}

export default Component;
