import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k6nq6mb0m.css';
import '../../css/l/l73m9po7l.css';
import '../../css/y/ybe6y-5ox.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="k6nq6mb0m"/><path class="l73m9po7l"/><path class="ybe6y-5ox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:systemd-wordmark"} {...others} />);
}

export default Component;
