import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/irmgkn-rx.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="irmgkn-rx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:nature-ecology-potted-cactus-tree-plant-succulent-pot"} {...others} />);
}

export default Component;
