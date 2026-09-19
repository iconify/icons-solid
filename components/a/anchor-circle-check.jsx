import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d_td2nbcq.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="d_td2nbcq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:anchor-circle-check"} {...others} />);
}

export default Component;
