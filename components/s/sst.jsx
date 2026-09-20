import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wyknwlbkn.css';

const viewBox = {"width":82,"height":64};
const content = `<path clip-rule="evenodd" class="wyknwlbkn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:sst"} {...others} />);
}

export default Component;
