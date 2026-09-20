import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qh46y3bin.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qh46y3bin"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pip-2-outline"} {...others} />);
}

export default Component;
