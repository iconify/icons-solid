import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fuv5y8b4m.css';
import '../../css/r/r-2vpkz6c.css';
import '../../css/x/xzic_p5kz.css';
import '../../css/g/gtgdvwp-e.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fuv5y8b4m"/><path class="r-2vpkz6c"/><path class="xzic_p5kz"/><path class="gtgdvwp-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:e-motorcycle-20-bold"} {...others} />);
}

export default Component;
