import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mcd41kb4g.css';
import '../../css/n/n7msz9oby.css';
import '../../css/a/axlgonxbo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mcd41kb4g"/><path class="n7msz9oby"/><path class="axlgonxbo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mooring-20"} {...others} />);
}

export default Component;
