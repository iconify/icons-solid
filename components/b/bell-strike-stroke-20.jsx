import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-73xxboi.css';
import '../../css/a/as12j9bus.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g-73xxboi"/><path class="as12j9bus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:bell-strike-stroke-20"} {...others} />);
}

export default Component;
