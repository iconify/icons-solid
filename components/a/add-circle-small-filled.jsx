import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pt2b5di-v.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="pt2b5di-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:add-circle-small-filled"} {...others} />);
}

export default Component;
