import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mr10-cc_e.css';
import '../../css/s/s27104b_p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mr10-cc_e"/><path class="s27104b_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:skyscraper-48"} {...others} />);
}

export default Component;
