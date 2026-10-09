import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv0gyqj3i.css';
import '../../css/m/mkxyiywxp.css';
import '../../css/t/tar_r4_5t.css';
import '../../css/u/u6iq9opqd.css';
import '../../css/q/q2dr6dr3a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yv0gyqj3i"/><path class="mkxyiywxp"/><path class="tar_r4_5t"/><path class="u6iq9opqd"/><path class="q2dr6dr3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:h2-molecule-48-bold"} {...others} />);
}

export default Component;
