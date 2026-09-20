import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mb-7hwcld.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mb-7hwcld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:table-rows-split"} {...others} />);
}

export default Component;
