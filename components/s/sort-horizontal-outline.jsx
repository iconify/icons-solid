import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o353a9box.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o353a9box"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:sort-horizontal-outline"} {...others} />);
}

export default Component;
