import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k6dlufb4l.css';
import '../../css/p/pxs3yikcr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k6dlufb4l"/><circle class="pxs3yikcr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:search-circle"} {...others} />);
}

export default Component;
