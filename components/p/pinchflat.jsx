import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fg5m1db1h.css';
import '../../css/a/a2j6mnb-l.css';

const viewBox = {"width":608.3,"height":608.3,"left":-17.2,"top":-28.6};
const content = `<path class="fg5m1db1h"/><path class="a2j6mnb-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:pinchflat"} {...others} />);
}

export default Component;
