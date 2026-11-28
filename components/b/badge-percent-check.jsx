import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b25cx9bkl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b25cx9bkl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:badge-percent-check"} {...others} />);
}

export default Component;
