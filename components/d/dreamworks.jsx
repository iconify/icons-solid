import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ckfu-yb4f.css';

const viewBox = {"width":300,"height":38.978};
const content = `<path class="ckfu-yb4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:dreamworks"} {...others} />);
}

export default Component;
