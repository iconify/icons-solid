import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x8wi2x_6l.css';
import '../../css/p/pvszaybyv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="x8wi2x_6l"/><path class="pvszaybyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:address-book-20"} {...others} />);
}

export default Component;
