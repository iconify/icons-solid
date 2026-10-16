import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ahflbbcgy.css';
import '../../css/t/twd90018l.css';
import '../../css/u/ut-54jgvw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ahflbbcgy"/><path class="twd90018l"/><path class="ut-54jgvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:speedometer-20"} {...others} />);
}

export default Component;
