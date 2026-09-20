import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zxxl__0bs.css';
import '../../css/e/e4ngkd7is.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="zxxl__0bs"/><path class="e4ngkd7is"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:brush"} {...others} />);
}

export default Component;
