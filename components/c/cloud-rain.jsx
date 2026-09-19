import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x3se7-35b.css';
import '../../css/d/dkh-5rbja.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x3se7-35b"/><path class="dkh-5rbja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:cloud-rain"} {...others} />);
}

export default Component;
