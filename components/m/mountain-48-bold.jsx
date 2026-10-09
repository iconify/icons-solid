import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jz4dh6bfp.css';
import '../../css/e/ekqm_acki.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jz4dh6bfp"/><path class="ekqm_acki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mountain-48-bold"} {...others} />);
}

export default Component;
