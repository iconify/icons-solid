import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y8pzxccdr.css';
import '../../css/r/rinqinbgr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="y8pzxccdr"/><path class="rinqinbgr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bathtub-48-bold"} {...others} />);
}

export default Component;
