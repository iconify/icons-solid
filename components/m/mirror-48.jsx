import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ilgp3hg6a.css';
import '../../css/a/atyhtibwr.css';
import '../../css/w/wrhqn4baz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ilgp3hg6a"/><path class="atyhtibwr"/><path class="wrhqn4baz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mirror-48"} {...others} />);
}

export default Component;
