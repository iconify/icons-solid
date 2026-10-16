import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9e0p_b-j.css';
import '../../css/b/b34wfpb4d.css';
import '../../css/e/eg_6x1bmw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n9e0p_b-j"/><path class="b34wfpb4d"/><path class="eg_6x1bmw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:emergency-exit-48-bold"} {...others} />);
}

export default Component;
