import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c-j1i2muo.css';
import '../../css/q/qxu7-jb9g.css';
import '../../css/e/e647zfbaz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="c-j1i2muo"/><path class="qxu7-jb9g"/><path class="e647zfbaz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:helideck-48"} {...others} />);
}

export default Component;
