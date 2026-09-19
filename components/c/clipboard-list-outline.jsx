import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eh1e9m4lr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eh1e9m4lr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:clipboard-list-outline"} {...others} />);
}

export default Component;
