import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b5g4gdxon.css';
import '../../css/c/c-2y_lb8w.css';
import '../../css/f/fpx2kva1t.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="b5g4gdxon"/><path class="c-2y_lb8w"/><path class="fpx2kva1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:plumb-bob-20"} {...others} />);
}

export default Component;
