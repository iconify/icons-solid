import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3svyccwt.css';
import '../../css/u/us2y8_bfl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k3svyccwt"/><path class="us2y8_bfl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:spatula-48-bold"} {...others} />);
}

export default Component;
