import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ggsab6nmw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ggsab6nmw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:laurel-wreath-left-filled"} {...others} />);
}

export default Component;
