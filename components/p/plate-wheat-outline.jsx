import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o8s2ht79g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o8s2ht79g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:plate-wheat-outline"} {...others} />);
}

export default Component;
