import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eczx2wfaa.css';

const viewBox = {"width":896,"height":960};
const content = `<path class="eczx2wfaa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:circleloaderone"} {...others} />);
}

export default Component;
