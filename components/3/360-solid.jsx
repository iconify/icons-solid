import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/axq885ryf.css';
import '../../css/f/fegcs2boz.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="axq885ryf"/><path clip-rule="evenodd" class="fegcs2boz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:360-solid"} {...others} />);
}

export default Component;
