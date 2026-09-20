import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kj-6kbbik.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kj-6kbbik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:desktop-slash"} {...others} />);
}

export default Component;
