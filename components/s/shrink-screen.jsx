import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3c_78bkn.css';
import '../../css/v/v758r-tyc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="v3c_78bkn"/><path class="v758r-tyc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:shrink-screen"} {...others} />);
}

export default Component;
