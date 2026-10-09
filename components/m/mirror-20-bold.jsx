import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fqrfxzblb.css';
import '../../css/e/e5nrzwjsg.css';
import '../../css/f/fh8bft_rz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fqrfxzblb"/><path class="e5nrzwjsg"/><path class="fh8bft_rz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mirror-20-bold"} {...others} />);
}

export default Component;
