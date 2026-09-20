import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2oa95zkl.css';
import '../../css/x/xxvlnybzz.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="f2oa95zkl"/><path class="xxvlnybzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:battery-5-solid"} {...others} />);
}

export default Component;
