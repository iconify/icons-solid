import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w7bk0z64w.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="w7bk0z64w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:boulder3"} {...others} />);
}

export default Component;
