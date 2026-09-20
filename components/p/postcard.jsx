import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rckfhcc4g.css';
import '../../css/u/u0awpynix.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="rckfhcc4g"/><path class="u0awpynix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:postcard"} {...others} />);
}

export default Component;
