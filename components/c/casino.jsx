import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_su40b-o.css';
import '../../css/a/a46a2oiqu.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="r_su40b-o"/><path class="a46a2oiqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:casino"} {...others} />);
}

export default Component;
