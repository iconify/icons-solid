import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jo664i1hk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jo664i1hk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:vector-square-alt"} {...others} />);
}

export default Component;
