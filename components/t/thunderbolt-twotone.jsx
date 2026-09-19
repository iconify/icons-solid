import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fi-0u1b-k.css';
import '../../css/f/fdsk41g4v.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="fi-0u1b-k"/><path class="fdsk41g4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:thunderbolt-twotone"} {...others} />);
}

export default Component;
