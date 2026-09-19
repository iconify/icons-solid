import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qqr3tj4qm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qqr3tj4qm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:sign-minus-square-light"} {...others} />);
}

export default Component;
