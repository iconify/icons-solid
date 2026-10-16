import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bun5sbcsa.css';
import '../../css/e/erw03p5yn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bun5sbcsa"/><path class="erw03p5yn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:signpost-48-bold"} {...others} />);
}

export default Component;
