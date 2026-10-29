import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/laz1hoccn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="laz1hoccn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:refrigerator-solid"} {...others} />);
}

export default Component;
