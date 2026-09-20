import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_840f2vp.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="x_840f2vp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:sort-alpha-asc"} {...others} />);
}

export default Component;
