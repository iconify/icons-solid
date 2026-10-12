import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a5hoe7b8s.css';
import '../../css/e/ea0j21kww.css';
import '../../css/v/ve4jb3chp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a5hoe7b8s"/><path class="ea0j21kww"/><path class="ve4jb3chp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:repeat-one-48"} {...others} />);
}

export default Component;
