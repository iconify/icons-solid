import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nwj-tdbmb.css';
import '../../css/k/k4o7aepui.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nwj-tdbmb"/><path class="k4o7aepui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:archive-in"} {...others} />);
}

export default Component;
