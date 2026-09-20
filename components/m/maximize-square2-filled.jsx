import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uoer9n1kx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="uoer9n1kx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:maximize-square2-filled"} {...others} />);
}

export default Component;
