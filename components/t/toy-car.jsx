import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gkn6c9j5d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gkn6c9j5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:toy-car"} {...others} />);
}

export default Component;
