import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rs_4a5yyu.css';
import '../../css/z/zetb63f3z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rs_4a5yyu"/><path class="zetb63f3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charge-point-sign-48-bold"} {...others} />);
}

export default Component;
