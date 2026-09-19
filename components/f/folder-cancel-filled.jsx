import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_a9z-b3c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l_a9z-b3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:folder-cancel-filled"} {...others} />);
}

export default Component;
