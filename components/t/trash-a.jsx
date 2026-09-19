import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v2lx5jb9v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v2lx5jb9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:trash-a"} {...others} />);
}

export default Component;
