import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/anu_as0ik.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="anu_as0ik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:bong-filled"} {...others} />);
}

export default Component;
