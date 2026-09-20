import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pm7p86bmj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pm7p86bmj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:keyboard-hide"} {...others} />);
}

export default Component;
