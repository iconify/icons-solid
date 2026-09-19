import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/frd6sbckt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="frd6sbckt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:user-edit-outline"} {...others} />);
}

export default Component;
