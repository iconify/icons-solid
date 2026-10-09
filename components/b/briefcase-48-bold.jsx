import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_xt6zhqo.css';
import '../../css/c/c1okp3bit.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l_xt6zhqo"/><path class="c1okp3bit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:briefcase-48-bold"} {...others} />);
}

export default Component;
