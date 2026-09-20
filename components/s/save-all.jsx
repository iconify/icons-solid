import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tj8ye8b4q.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="tj8ye8b4q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:save-all"} {...others} />);
}

export default Component;
