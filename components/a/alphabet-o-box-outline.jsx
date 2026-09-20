import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lcf4q5osf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lcf4q5osf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:alphabet-o-box-outline"} {...others} />);
}

export default Component;
