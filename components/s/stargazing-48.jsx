import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/blpec2f_v.css';
import '../../css/p/pwrb__blp.css';
import '../../css/g/g1qd2ab1h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="blpec2f_v"/><path class="pwrb__blp"/><path class="g1qd2ab1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:stargazing-48"} {...others} />);
}

export default Component;
