import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/odlpk9b9a.css';
import '../../css/q/q2hfd_b_u.css';
import '../../css/t/tbml7r8ok.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="odlpk9b9a"/><path class="q2hfd_b_u"/><path class="tbml7r8ok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fireplace-48-bold"} {...others} />);
}

export default Component;
