import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/twpo036bv.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="twpo036bv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:tablet-portrait"} {...others} />);
}

export default Component;
