import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3t19-9ky.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="v3t19-9ky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:add-sign-bold"} {...others} />);
}

export default Component;
