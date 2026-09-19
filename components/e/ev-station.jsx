import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/go4i3w7cb.css';
import '../../css/e/e12zghbho.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="go4i3w7cb"/><path class="e12zghbho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:ev-station"} {...others} />);
}

export default Component;
