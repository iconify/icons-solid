import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuqiplbfs.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cuqiplbfs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:paint-roller"} {...others} />);
}

export default Component;
