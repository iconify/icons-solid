import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-euov8ek.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o-euov8ek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:house-heart-line"} {...others} />);
}

export default Component;
