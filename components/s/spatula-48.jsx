import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cd5s3xe8a.css';
import '../../css/k/kbk8q-9yx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cd5s3xe8a"/><path class="kbk8q-9yx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:spatula-48"} {...others} />);
}

export default Component;
