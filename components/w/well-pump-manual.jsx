import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8xyuackj.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="t8xyuackj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:well-pump-manual"} {...others} />);
}

export default Component;
