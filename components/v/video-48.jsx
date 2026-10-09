import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z9frzpbrc.css';
import '../../css/m/mtcvrxbfs.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z9frzpbrc"/><path class="mtcvrxbfs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:video-48"} {...others} />);
}

export default Component;
