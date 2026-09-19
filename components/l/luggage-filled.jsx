import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-itl9ibz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l-itl9ibz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:luggage-filled"} {...others} />);
}

export default Component;
