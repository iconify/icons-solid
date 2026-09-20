import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nb7aw7omu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nb7aw7omu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:menu-left-outline"} {...others} />);
}

export default Component;
