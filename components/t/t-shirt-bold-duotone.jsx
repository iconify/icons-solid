import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lh0fupbic.css';
import '../../css/u/u9p7tmx1f.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lh0fupbic"/><path class="u9p7tmx1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:t-shirt-bold-duotone"} {...others} />);
}

export default Component;
