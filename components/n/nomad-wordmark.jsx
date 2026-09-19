import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yl5zwabiv.css';
import '../../css/q/qm-avg1-g.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="yl5zwabiv"/><path class="qm-avg1-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:nomad-wordmark"} {...others} />);
}

export default Component;
