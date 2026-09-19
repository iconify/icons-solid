import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o14m0cc9r.css';
import '../../css/z/z7gbrqbty.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="o14m0cc9r"/><path class="z7gbrqbty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:pricetag-multiple"} {...others} />);
}

export default Component;
