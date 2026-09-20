import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jmhuaub_w.css';
import '../../css/o/ofyg4tbzj.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="jmhuaub_w"/><path class="ofyg4tbzj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:manhole"} {...others} />);
}

export default Component;
