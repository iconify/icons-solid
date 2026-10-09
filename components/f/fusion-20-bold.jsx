import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/shozmhblo.css';
import '../../css/e/ex4r6bbxg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="shozmhblo"/><path class="ex4r6bbxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fusion-20-bold"} {...others} />);
}

export default Component;
