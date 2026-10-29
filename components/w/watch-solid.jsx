import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xhhr4kvhs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xhhr4kvhs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:watch-solid"} {...others} />);
}

export default Component;
