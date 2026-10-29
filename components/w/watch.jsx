import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-vy29b6h.css';
import '../../css/y/yhfomobvu.css';
import '../../css/d/dnsh1cbuv.css';
import '../../css/i/i7cnlq80v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a-vy29b6h wm-k"/><path class="wm-k yhfomobvu"/><path class="dnsh1cbuv wm-k"/><path class="i7cnlq80v wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:watch"} {...others} />);
}

export default Component;
