import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9790znoc.css';
import '../../css/g/ghwi1p49f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r9790znoc"/><path class="ghwi1p49f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:full-moon-line"} {...others} />);
}

export default Component;
