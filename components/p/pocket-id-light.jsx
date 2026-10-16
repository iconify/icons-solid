import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lm2iocbwi.css';

const viewBox = {"width":712.96,"height":712.96,"left":-346.211,"top":-706.48};
const content = `<path class="lm2iocbwi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:pocket-id-light"} {...others} />);
}

export default Component;
