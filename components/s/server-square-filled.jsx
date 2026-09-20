import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cbpwy0b8b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cbpwy0b8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:server-square-filled"} {...others} />);
}

export default Component;
