import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/idk8i0bvj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="idk8i0bvj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:folder-network"} {...others} />);
}

export default Component;
