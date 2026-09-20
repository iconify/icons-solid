import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lw1lpcl0t.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="lw1lpcl0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:juice"} {...others} />);
}

export default Component;
