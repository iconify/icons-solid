import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lae2_dgov.css';
import '../../css/a/ah8_uokdg.css';
import '../../css/n/nunhi4evw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lae2_dgov"/><path class="ah8_uokdg"/><path class="nunhi4evw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:price-down-20"} {...others} />);
}

export default Component;
