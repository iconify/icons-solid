import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gq-3jutph.css';
import '../../css/t/t2dpk9bzd.css';
import '../../css/a/aqnz63b1c.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gq-3jutph"/><path class="t2dpk9bzd"/><path class="aqnz63b1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cooking-pot-48"} {...others} />);
}

export default Component;
