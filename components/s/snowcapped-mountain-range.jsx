import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwdw506lb.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="mwdw506lb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:snowcapped-mountain-range"} {...others} />);
}

export default Component;
