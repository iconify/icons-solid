import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2c_0m8bb.css';
import '../../css/f/fezn9qb7x.css';

const viewBox = {"width":450,"height":49.65,"left":275,"top":475.18};
const content = `<path class="f2c_0m8bb"/><path class="fezn9qb7x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:maruti-suzuki"} {...others} />);
}

export default Component;
