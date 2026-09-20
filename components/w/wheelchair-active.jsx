import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pzlc5jb0t.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="pzlc5jb0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:wheelchair-active"} {...others} />);
}

export default Component;
