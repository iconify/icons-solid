import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bjm0c5bzl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bjm0c5bzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:couple-48-bold"} {...others} />);
}

export default Component;
