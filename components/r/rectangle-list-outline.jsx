import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lakha6bca.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lakha6bca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:rectangle-list-outline"} {...others} />);
}

export default Component;
