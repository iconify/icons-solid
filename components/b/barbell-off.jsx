import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zw4q45bxx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zw4q45bxx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:barbell-off"} {...others} />);
}

export default Component;
