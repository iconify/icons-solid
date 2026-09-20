import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k88o-jb2c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k88o-jb2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:letter-x-octagon-solid"} {...others} />);
}

export default Component;
